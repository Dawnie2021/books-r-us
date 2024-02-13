const router = require('express').Router();
const { User, Book } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const bookData = await Book.create({
            book_name: req.body.book_title,
            book_description: req.body.book_description,
            author_name: req.body.author_name,
            genre: req.body - genre
        });

        res.redirect('/');
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/fav/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, { include: [Book]});

        if (await userData.getBook(req.params.id)) {
            await userData.removeBook(req.params.id);
        } else {
            await userData.addBook(req.params.id);
        }

        await userData.save();

        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/', async (req, res) => {
    console.log("START");
    try {
        const dbBookData = await Book.findAll();

        res.status(200).json(dbBookData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const dbBookData = await Book.findByPk(req.params.id, {

        });

        const book = dbBookData.get({ plain: true });
        res.status(200).json(book);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;

