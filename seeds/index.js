const sequelize = require('../config/connection');
const { User, Book } = require('../models');



const userData = require('./userData.json');
const bookData = require('./bookData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Book.bulkCreate(bookData, {
    individualHooks: true,
    returning: true,
  });

  for (const user of userData) {
    const userInstance = await User.create(user);
    await userInstance.setBooks(user.books);
    await userInstance.save();
  }

  const users = await User.findAll({ include: [Book] });

  process.exit(0);
};

seedDatabase();
