const Production = require('./Production');
const User = require('./User');
// declares that the each user can make multiple posts to the production table
User.hasMany(Production, {
  foreignKey: 'user_id',
});

module.exports = { Production, User };
