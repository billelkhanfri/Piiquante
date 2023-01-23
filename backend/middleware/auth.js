//add token for each user
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // get token from header request
        const token = req.headers.authorization.split(' ')[1];
        //verify user token with request token
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        // if used id and decoded token are the same, enable authorization
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId
        };
        next();
    } catch (error) {
        res.status(401).json({ error });
    }
};