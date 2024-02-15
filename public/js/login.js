const submitButton = document.querySelector("#submit");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const submitted = async (event) => {
    console.log(email.value, password.value);
    event.preventDefault();

    let bodyData = {
        "email": email.value,
        "password": password.value

    };

    fetch('/api/users/login', {
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