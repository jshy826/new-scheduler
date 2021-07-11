
function onGeoSuccess(position) {
    // 위도 및 경도
    const lat = position.coords.latitude;
    const lng = position.coords. longitude;
    
    // api 에 있는 기능 중 units를 이용함으로써 화씨 온도를 섭씨 온도 표기로 바꿔줌
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    // fetch를 통해 url을 js가 불러줌. 처리가 끝나면 json 객체 파일을 불러오게 함.
    // then은 앞서 일어난 처리가 끝나면 다음 처리를 해달라는 코드임.
    weatherCheck(url);
}

function weatherCheck(url) {
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-child(2)");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = `location : ${data.name}`;
        temp.innerText = `temp : ${Math.round(data.main.temp)}°C`;
        weather.innerText = `weather : ${data.weather[0].main}`;
    });
}

function onGeoError() {
    alert("faiied");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);