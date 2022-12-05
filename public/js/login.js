const loginButton = document.getElementById('login-button');

// loginButton.addEventListener('click', function(event) {
//     event.preventDefault();
//     document.location.replace('/homepage')
// })

loginButton.addEventListener('click', async function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({ name:username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/homepage');
    } else {
        alert(response.statusText);
    }

})