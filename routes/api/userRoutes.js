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

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
