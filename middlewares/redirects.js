exports.isAuthenticated = (req, res, next) => {
  if (req.session.isAuthenticated) {
    req.flash("msg", "Ya iniciaste sesión");
    return res.redirect("/books");
  }

  next();
};

exports.isUnauthorized = (req, res, next) => {
  if (!req.session.isAuthenticated) {
    req.flash("msg", "Primero necesitas iniciar sesión");
    return res.redirect("/");
  }

  next();
};