const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next) => {
    try {
        const token = req.headers['access-token'];
        if (!token) {
            return res.status(401).json({
                message: 'Authentication  failed'
            });
        } 
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY, { algorithm: 'HS512' });
        req.user = verifyToken;
        next();
    } catch (error) {
        res.status(401).json({
            message: 'Authentication failed',
            error: error
        });
    }
}

module.exports = auth;