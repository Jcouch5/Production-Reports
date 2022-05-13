const Production = require('./Production');
const User = require('./User');

User.hasMany(Production, {
  foreignKey: 'user_id',
});

module.exports = { Production, User };
