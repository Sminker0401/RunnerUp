const submitButton = document.getElementById('submit-button');
const logoutButton = document.getElementById('logout-button');
const goal = document.getElementById("goal");

displayResults();

const listResults = (data) => {

    const goalList = document.getElementById("goalList");

    while (goalList.hasChildNodes()) {
        goalList.removeChild(goalList.firstChild)
    }

    for (let i = 0; i < data.length; i++) {
    
    let date = moment(data[i].date_created).format("MM-DD-YYYY")
    let activity = data[i].activity;
    let duration = data[i].duration;
    let entry = document.createElement('h2')
    
    entry.textContent = `${date} Activity: ${activity} Duration: ${duration} minutes`;
    goalList.appendChild(entry)
    }
}

function displayResults() {

    fetch('/api/entry/')
        .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data);
      listResults(data)
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

logoutButton.addEventListener('click', function (event) {
    event.preventDefault();
    document.location.replace('/');
})