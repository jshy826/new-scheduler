const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 기본적으로 js는 function 실행시 관련 값들을 자동으로 arguments에 넣어줌
function submitLoginCheck(event) {
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting(userName);
}

function paintGreeting(userName) {
    greeting.innerText = `Hello, ${userName}!`;
    // = greeting.innerText = "Hello, " + userName + "!";
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", submitLoginCheck);
} else {
    paintGreeting(savedUsername);
}