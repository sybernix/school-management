const jwt = require('jsonwebtoken');
const keys = require('../config/key.json');
const JWT_KEY = keys.JWT_KEY;

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        req.userDate = jwt.verify(token, JWT_KEY);
        next();
    } catch (e) {
        return res.status(401).send('Authorization Failed!');
    }
};