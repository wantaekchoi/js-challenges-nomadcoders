const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingForm = document.querySelector("#greeting-form");
const greetingMessage = document.querySelector("#greeting-form h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
    greetingMessage.innerText = `Hello ${username}`;
    greetingForm.classList.remove(HIDDEN_CLASSNAME);
}

// add user name and and paint greetings
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// remove user name and refresh 
function onLogoutSubmit(event) {
    greetingForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    greetingForm.addEventListener("submit", onLogoutSubmit);
}