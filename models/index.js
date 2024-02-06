const User = require('./User');
const Book = require('./Book');

Book.belongsToMany(User, {
    foreignKey: 'book_id',
    through: 'UserBooks'
});


User.belongsToMany(Book, {
    foreignKey: 'user_id',
    through: 'UserBooks'
});




module.exports = { 
User,
Book
};
