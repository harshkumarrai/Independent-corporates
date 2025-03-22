const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  try {
    const token = req.header('x-token');
    if (!token) {
      return res.status(400).send('Token Not Found');
    }

    const decoded = jwt.verify(token, 'jwtPassword');
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error('Authentication Error:', err);
    res.status(400).send('Authentication Error');
  }
};
