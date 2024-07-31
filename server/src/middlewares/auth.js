const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Get the token from the cookie
    const token = req.cookies.token;

    // Check if token exists
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the decoded token to the request object
        req.user = decoded;

        // Call the next middleware
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;