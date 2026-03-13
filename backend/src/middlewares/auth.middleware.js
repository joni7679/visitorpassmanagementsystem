const jwt = require("jsonwebtoken");

const authmiddleware = (req, res, next) => {
    try {
        // jwt token form cookie
        const token = req.cookies.token;
        // if token is missing so error 401 unathorize user
        if (!token) {
            return res.status(401).json({
                message: "unathorized user"
            })
        }
        // verify token jwt secretkey
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decode;
        next()
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

module.exports = authmiddleware