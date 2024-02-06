const router = require('express').Router();
const { User, Book } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({ include: [Book]});
        res.json(users);
    } catch(err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const bookId = 6;
        const user = await User.findOne({ include: [Book]});
        await user.addBook(bookId);
        await user.save();
        return res.json('Success');
     } catch(err) {
         console.log(err);
     }
});

router.post('/signup', async (req, res) => {
    try {
       const userData = await User.create (req.body);
       return res.json('Success');
     } catch(err) {
         console.log(err);
     }
});

router.post('/login', async (req, res) => {
});

router.post('/logout', (req, res) => {
});

module.exports = router;
