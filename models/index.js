const User = require('./User');
const Book = require('./book');
const FavoriteBook = require('./favoriteBook');


// User.hasMany(Book, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Book.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// FavoriteBook.belongsToMany(Book, {
//     through: Book,
//     // foreignKey: book_id

// });




module.exports = { 
User,
Book,
FavoriteBook,
};
