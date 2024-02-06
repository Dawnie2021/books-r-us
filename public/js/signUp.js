const submitButton = document.querySelector("#submit");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const submitted = () => {
    console.log(email.value, password.value);
};

submitButton.addEventListener("click", submitted);