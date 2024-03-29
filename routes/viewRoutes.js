const router = require("express").Router();
const { User, Book } = require("../models");
const withAuth = require("../utils/auth");

const serialize = (data) => JSON.parse(JSON.stringify(data));

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render("index", { loggedIn: req.session.loggedIn });
}
);

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render("login", { loggedIn: req.session.loggedIn });
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render("signup", { loggedIn: req.session.loggedIn });
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
      books,
      loggedIn: req.session.loggedIn,
    }
  );
});

router.get("/dashboard", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  try {
    const userData = await User.findByPk(req.session.user_id, { include: [Book] });
    const userBookIds = serialize(await userData.getBooks()).map(o => String(o.id));
    let books = [];

    for (let b in userBookIds) {
      let current = await Book.findByPk(userBookIds[b])
      console.log("CURRENT", current);
      books.push(current.dataValues);
    }

    console.log("BOOK IDS", books);

    res.render(
      "dashboard", // template name
      {
        books, loggedIn: req.session.loggedIn
      }
    );

    return;
  } catch (err) {
    console.log(err);
  }

  res.render(
    "dashboard", // template name
  );
});

router.get("/books/:id", async (req, res) => {
  const bookData = await Book.findByPk(req.params.id);
  const book = bookData.get();

  res.render(
    "book", // template name
    {
      book, loggedIn: req.session.loggedIn
    }
  );
});

router.get("/logout", async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.redirect("/");
    });
  } else {
    res.redirect("/");
  }
});

module.exports = router;
