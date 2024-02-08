const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');

router.use('/books', bookRoutes)
router.use('/users', userRoutes);

module.exports = router;
