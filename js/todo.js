const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const logoutBtn = document.getElementById("logout");

const TODOS_KEY = "todos";

let toDos = [];

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

function deleteToDo(params) {
    const li = params.target.parentElement;
    li.remove();
    // filter를 이용해 배열 전체를 확인해서 li인자의 id랑 리스트의 id가 같으면 그 값은 걸러냄.
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function saveToDos() {
    // JSON.stringify 는 단순 text를 String으로 만들어줌
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        id : Date.now(),
        text : newTodo,
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    // JSON.parse 는 String을 js의 Object(객체)로 바꿔줌
    const parsedToDos = JSON.parse(savedToDos);
    // toDos = parsedToDos;
    // parsedToDos.forEach(function명); 으로도 쓸 수 있음.
    // function을 호출하고, 거기에 자동으로 element값이 넘억마
    parsedToDos.forEach(element => {
        paintToDo(element);
        toDos.push(element);
    });

}

function logoutSubmit(event) {
    localStorage.clear();
    location.reload();
}


logoutBtn.addEventListener("click", logoutSubmit);