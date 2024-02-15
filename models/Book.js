const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Book extends Model { }

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    book_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    book_author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    book_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // imageUrl: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  }


);

module.exports = Book;
