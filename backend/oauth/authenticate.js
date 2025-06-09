const isAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    console.log('el fallo aca');
    return res.status(401).json({ message: 'Unauthorized access.' });
    
  }
  next();
};

module.exports = { isAuthenticated };
