const $login = document.getElementById('form-login');




/* function logearse(boton) {

    if (boton.name === "login") {
        console.log($email, $password)
    }
} */



/* document.getElementById('form-login').addEventListener('click', function (e) {
    e.preventDefault();
    logearse(e.target)
}) */

$login.addEventListener('submit', e => {
    const $email = document.getElementById('email-login').value;
    const $password = document.getElementById('password-login').value;
    const data = {

        username: $email,
        password: $password

    }
    e.preventDefault();
    console.log($email, $password);

    console.log("**************************");

    fetch('http://localhost:9999/verificar', {
        mode: 'no-cors',
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

})