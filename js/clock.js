const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart("2", "0");
    const minutes = String(date.getMinutes()).padStart("2", "0");
    const seconds = String(date.getSeconds()).padStart("2", "0");
    //padStart란, String이 지정해준 길이가 충족을 하지 않으면 그 길이만큼 글자 앞에 해당 문자를 넣어줌 ex) padStart("2", "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
// setInterval(function, time(5000 <- 5s)) or setTimeout(function, time);
setInterval(getClock, 1000);