const input = document.querySelector("#input");
const deci = document.querySelector("#deci");
const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();
    deci.innerHTML = parseInt(input.value, 2);
});