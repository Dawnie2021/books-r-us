const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', /* withAuth, async */ (req, res) => {

  res.render('index', {
/*     users,
    loggedIn: req.session.loggedIn, */
  });

/*   try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));
  } catch (err) {
    res.status(500).json(err);
  } */
});

router.get('/login', (req, res) => {
/*   if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
 */
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard', // template name
  { book: { title: 'Beans and Rice are Good' }},);
});


module.exports = router;
