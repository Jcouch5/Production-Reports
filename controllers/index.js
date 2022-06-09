const router = require('express').Router();

// const apiRoutes = require('./api/');
const homeRoutes = require('./home.js');
// directs to the api folder when the url contains /api
// router.use('/api', apiRoutes);
// directs to the home routes js file
router.use('/', homeRoutes);

module.exports = router;
