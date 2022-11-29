const User = require('./User');
const Entry = require('./Entry');

User.hasMany(Entry, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Entry.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Entry };

const goal = document.getElementById("goal");
const goalList = document.getElementById("goalList");
const submitButton = document.getElementById("submit");

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
