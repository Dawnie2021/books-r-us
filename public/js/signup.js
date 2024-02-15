const submitButton = document.querySelector("#submit");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const submitted = async (event) => {
    event.preventDefault();

    let bodyData = {
        "name": username.value,
        "email": email.value,
        "password": password.value,
        "books": []
    };

    fetch('/api/users/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
        .then(() => window.location.assign('/dashboard'))
        .catch(() => window.location.assign('/'));
};

submitButton.addEventListener("click", submitted);