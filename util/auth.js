// will check if a user is logged in.
const withAuth = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
