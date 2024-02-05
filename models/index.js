const User = require('./User');
const Book = require('./Book');
// const FavoriteBook = require('./FavoriteBook');


User.hasMany(Book, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Book.belongsTo(User, {
    foreignKey: 'user_id'
});

// FavoriteBook.belongsToMany(Book, {
//     through: Book,
//     // foreignKey: book_id

// });

User.belongsToMany(User, {
     through: User })


Book.belongsToMany(Book, 
    { through: userBook })


module.exports = { 
User,
Book,
// FavoriteBook,
};
