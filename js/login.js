// import * as todos from './todo.js';

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingForm = document.querySelector("#greeting-form");
const greetingMessage = document.querySelector("#greeting-form h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
    greetingMessage.innerText = `Hello ${username}!`;
}

// add user name and and paint greetings
function onLoginSubmit(event) {
    event.preventDefault();

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    displayForm();
}

// remove user name and refresh 
function onLogoutSubmit(event) {
    localStorage.clear();
    // localStorage.removeItem(USERNAME_KEY);
    displayForm();
}

function displayForm() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    
    if (savedUsername === null) {
        greetingForm.classList.add(HIDDEN_CLASSNAME);
        loginForm.classList.remove(HIDDEN_CLASSNAME);
    } else {
        paintGreetings(savedUsername);
        loginForm.classList.add(HIDDEN_CLASSNAME);
        greetingForm.classList.remove(HIDDEN_CLASSNAME);
    }
}

loginForm.addEventListener("submit", onLoginSubmit);
greetingForm.addEventListener("submit", onLogoutSubmit);
displayForm();