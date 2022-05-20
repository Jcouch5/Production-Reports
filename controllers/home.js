const router = require('express').Router();
const { Production, User } = require('../models');
const helper = require('../util/helpers');
const yesterday = helper.format_date(
  new Date(new Date().setDate(new Date().getDate() - 1))
);

router.get('/', async (req, res) => {
  try {
    res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/reports', (req, res) => {
  try {
    res.render('reports');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/daily-report', async (req, res) => {
  try {
    res.render('daily-report');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/daily-summary', async (req, res) => {
  try {
    console.log(yesterday);
    const reportData = await Production.findAll({
      where: { date: yesterday },
    });
    const lines = reportData.map((line) => line.get({ plain: true }));
    res.render('daily-summary', { lines });
  } catch (err) {
    console.log('hello');
    res.status(500).json(err);
  }
});
router.get('/monthly-report', async (req, res) => {
  try {
    res.render('monthly-report');
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/weekly-report', async (req, res) => {
  try {
    res.render('weekly-report');
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
