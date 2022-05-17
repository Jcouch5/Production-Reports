const router = require('express').Router();

const dailyReports = require('./daily-report.js');
const dailySummary = require('./daily-summary.js');
const weeklyReports = require('./weekly-report');
const monthlyReports = require('./monthly-report.js');
const User = require('./user');

router.use('/report', dailyReports);
router.use('/summary', dailySummary);
router.use('/weekly', weeklyReports);
router.use('/monthly', monthlyReports);
router.use('/user', User);

module.exports = router;
