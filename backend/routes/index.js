const router = require('express').Router();
const eventoRutas = require('./eventoRoutes');
const passport = require('passport');
const authRoutes = require('./authRoutes');

router.use('/',require('./swagger'));
router.use('/api/eventos', eventoRutas);

router.use('/', authRoutes);
router.get('/login/github', passport.authenticate('github'), (req, res) => {});
router.get('/login/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err) }
    res.redirect('/');
  });
});

module.exports = router;//just for changes