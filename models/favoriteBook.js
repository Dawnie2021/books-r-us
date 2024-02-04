const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class FavoriteBook extends Model {}

FavoriteBook.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    book_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'book',
            key: 'id',
            unique: false
        
        }

    },

},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'favorite_book',
      }


);

module.exports = FavoriteBook;