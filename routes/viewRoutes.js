const router = require("express").Router();
const { User, Book } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render("index", {
  });
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

router.get("/dashboard/all", async (req, res) => {
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

router.get("/dashboard", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  const bookData = await Book.findAll();
  const all = bookData.map(o => o.get());

  

  /* if (books.count <= 0)
    res.redirect("/all"); */

  res.render(
    "dashboard", // template name

/*     {
      books
    } */
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
