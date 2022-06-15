const router = require('express').Router();
// require the Production and USer table models
const { Production, User } = require('../models');
// require helper function file, had issues when deconstructed out the needed function
const helper = require('../util/helpers');
// creates a new date object with the date of today -1 I.E yesterday. Please don't ask why it works like this, it just does. You can change the number to go back further if needed
const yesterday = helper.format_date2(
  new Date(new Date().setDate(new Date().getDate() - 1))
);
// routes that renders the homepage
router.get('/', async (req, res) => {
  try {
    res.render('home', {
      logged_in: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// renders the login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
// renders the signup page
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});
// renders the daily summary page with the previous days information
router.get('/daily-summary', async (req, res) => {
  try {
    res.render('daily-summary');
  } catch (err) {
    res.status(500).json(err);
  }
});
// renders the daily reports page with the previous days information
router.get('/daily-report', async (req, res) => {
  try {
    const reportData = await Production.findAll({
      where: { date: yesterday },
    });
    const lines = reportData.map((line) => line.get({ plain: true }));
    res.render('daily-report', { lines });
  } catch (err) {
    res.status(500).json(err);
  }
});
// renders the monthly report page with the previous months information
router.get('/monthly-report', async (req, res) => {
  try {
    res.render('monthly-report');
  } catch (err) {
    res.status(500).json(err);
  }
});
// renders the weekly report page with the previous weeks information
router.get('/weekly-report', async (req, res) => {
  try {
    res.render('weekly-report');
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/new-data', async (req, res) => {
  try {
    let records = [0];
    if (req.body.records) {
      records.push(0);
    }
    res.render('new-data', { records });
  } catch (err) {}
});
module.exports = router;
