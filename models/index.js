const User = require('./user');
const Entry = require('./entry');

User.hasMany(Entry, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Entry.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Entry }

