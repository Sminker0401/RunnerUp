const submitButton = document.getElementById('submit-button');

function displayResults() {

    fetch('/api/entry/')
        .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data);
      })
};

submitButton.addEventListener('click', async function (event) {
    event.preventDefault();
    const duration = document.getElementById('duration').value.trim();
    const activity = document.getElementById('activity').value.trim();

    const response = await fetch('/api/entry/', {
      method: 'POST',
      body: JSON.stringify({ duration, activity }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // document.location.replace('/homepage');
        displayResults();
    } else {
        alert(response.statusText);
    }

})