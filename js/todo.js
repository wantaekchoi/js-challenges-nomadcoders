const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const STRIKETHROUGH_CLASSNAME = "strikethrough";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function doneToDo(event) {
    const li = event.target.parentElement;
    li.classList.add(STRIKETHROUGH_CLASSNAME);
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    
    const doneButton = document.createElement("button");
    doneButton.innerText = "✅";
    doneButton.addEventListener("click", doneToDo);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "🗑";
    deleteButton.addEventListener("click", deleteToDo);

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    li.appendChild(doneButton);
    li.appendChild(deleteButton);
    li.appendChild(span);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}