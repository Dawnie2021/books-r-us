const router = require("express").Router();
const { User, Book } = require("../models");
const withAuth = require("../utils/auth");

router.get(
  "/",
  /* withAuth, async */ (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
    res.render("index", {
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
  }
);

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
 
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render("signup");
});

router.get("/dashboard", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  const bookData = await Book.findAll();
  const books = bookData.map(o => o.get());

  res.render(
    "dashboard", // template name
    
    {
      books
    }
  );
});

router.get("/books/:id", async (req, res) => {
  const bookData = await Book.findByPk(req.params.id);
  const book = bookData.get();

  res.render(
    "book", // template name
    {
      book, 
    }
  );
});
module.exports = router;
