const router = require('express').Router();
const Book = require('../../models/Book');

router.post('/', async (req, res) => {
    try {
        const bookData = await Book.create({
            book_title: req.body.book_title,
            book_description: req.body.book_description,
            author_name: req.body.author_name,
            genre: req.body - genre
        });

        res.redirect('/');
    } catch (err) {
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

