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
    res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }
});
// renders the reports page
router.get('/reports', (req, res) => {
  try {
    res.render('reports');
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
    console.log(yesterday);
    const reportData = await Production.findAll({
      where: { date: yesterday },
    });
    const lines = reportData.map((line) => line.get({ plain: true }));
    console.log(lines);
    res.render('daily-report', { lines });
  } catch (err) {
    console.log('hello');
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
// renders the weekly report page with the previous weeeks information
router.get('/weekly-report', async (req, res) => {
  try {
    res.render('weekly-report');
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
