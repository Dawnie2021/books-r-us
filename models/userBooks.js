const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./user");
const Book = require("./book");

// https://sequelize.org/v3/docs/associations/#belongs-to-many-associations
// Peep docs
User.belongsToMany(User, { through: user })
Book.belongsToMany(Book, { through: userBook })

class UserBook extends Model {}

UserBook.init({
  user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userBook: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

module.exports = UserBook;
