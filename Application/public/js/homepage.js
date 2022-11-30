const submitButton = document.getElementById('submit-button');
const goal = document.getElementById("goal");
const goalList = document.getElementById("goalList");

submitButton.addEventListener("click", () => {
    //appends the recent search to the list of prior searches
    let newListItem = document.createElement("li");
    //create new text node
    let listValue = document.createTextNode(goal.value);
    //add text node to li element
    newListItem.appendChild(listValue);
    //add new list element built in previous steps to unordered list
    goalList.appendChild(newListItem);
})

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