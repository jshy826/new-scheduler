const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const toDoElement = document.querySelector(".todo");
const toDolist = document.querySelector(".div-todolist");
const logout = document.querySelector(".div-logout");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const LOGIN_FORM = "login-form";
const LOGOUT_CSS = "css-logout";

// 기본적으로 js는 function 실행시 관련 값들을 자동으로 arguments에 넣어줌
function submitLoginCheck(event) {
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(LOGIN_FORM);
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting(userName);
}

function paintGreeting(userName) {
    greeting.innerText = `Hello, ${userName}!`;
    // = greeting.innerText = "Hello, " + userName + "!";
    greeting.classList.remove(HIDDEN_CLASSNAME);
    toDoElement.classList.remove(HIDDEN_CLASSNAME);
    toDolist.classList.remove(HIDDEN_CLASSNAME);
    logout.classList.remove(HIDDEN_CLASSNAME);
    logout.classList.add(LOGOUT_CSS);
    loginForm.classList.remove(LOGIN_FORM);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    toDoElement.classList.add(HIDDEN_CLASSNAME);
    toDolist.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", submitLoginCheck);
} else {
    paintGreeting(savedUsername);
}