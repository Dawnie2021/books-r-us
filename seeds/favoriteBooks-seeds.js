const { FavoriteBook } = require('../models');

const favoriteBookData = [
{
    book_id: 1,
},

// {
//     book_id: 2,
// },

// {
//     book_id: 3,
// },



]

const seedFavoriteBook = () => FavoriteBook.bulkCreate(favoriteBookData);

module.exports = seedFavoriteBook;
