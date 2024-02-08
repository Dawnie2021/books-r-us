// const router = require('express').Router();
// const { Book} = require('../models');


// router.get('/', async (req, res) => {
//   try {
//     const dbBookData = await Book.findAll({
      
//     });

//     const book = dbBookData.map((book) =>
//      book.get({ plain: true })
//     );

//     res.render('homepage', {
//       book,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });


// router.get('/book/:id', async (req, res) => {
//   try {
//     const dbBookData = await Book.findByPk(req.params.id, {
      
//     });

//     const book = dbBookData.get({ plain: true });
//     res.render('book', { book });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });



// module.exports = router;
