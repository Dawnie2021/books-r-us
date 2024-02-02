const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  res.render('index');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

module.exports = router;
