const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

//floor는 숫자 내림, round 는 반올림
const chosenImage = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img");
background.src = `img/${chosenImage}`;
//append 는 가장 뒤에, prepend 는 가장 위에 오게 함
document.body.appendChild(background);