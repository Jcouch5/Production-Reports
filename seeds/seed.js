const { Production, User } = require('../models');
const sequelize = require('../config/connection');
const productionData = require('./data.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const line of productionData) {
    await Production.create({
      ...line,
    });
  }
  process.exit(0);
};

seedDatabase();
