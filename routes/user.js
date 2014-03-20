var passport = require('passport');

exports.account = function(req, res) {
  res.render('account', { user: req.user });
};

exports.member = function(req, res) {
  res.render('member', { user: req.user });
};

exports.getlogin = function(req, res) {
  res.render('login', { user: req.user, message: req.session.messages });
};

exports.admin = function(req, res) {
  res.render('admin', { user: req.user });
};

  
// POST /login
//   This is an alternative implementation that uses a custom callback to
//   acheive the same functionality.
exports.postlogin = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) {
      req.session.messages =  [info.message];
      return res.redirect('/login')
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      if (user.admin) { return res.redirect('/admin');}
      return res.redirect('/member');
    });
  })(req, res, next);
};

exports.logout = function(req, res) {
  req.session.messages = null;
  req.logout();
  res.redirect('/login');
};
