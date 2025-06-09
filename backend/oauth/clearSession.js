function clearSessionIfExists(req, res, next) {
  if (req.session.user) {
    req.session.destroy(err => {
      if (err) return next(err);
      next();
    });
  } else {
    next();
  }
}

module.exports = {clearSessionIfExists};