const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', async function (event) {
    event.preventDefault();
    const duration = document.getElementById('duration').value.trim();
    const activity = document.getElementById('activity').value.trim();

    const response = await fetch('/api/user/', {
      method: 'POST',
      body: JSON.stringify({ duration, activity }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/homepage');
    } else {
        alert(response.statusText);
    }

})