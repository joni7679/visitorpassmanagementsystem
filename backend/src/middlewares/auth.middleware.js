const jwt = require("jsonwebtoken")

async function authmiddleware(req, res, next) {
    try {
        let token = null;
        if (req.cookies && req.cookies.token) {
            token = req.cookies.token;
        }

        if (!token && req.headers.authorization) {
            token = req.headers.authorization.split(
                " "
            )[1]

        }

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized..."
            })
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (!decode) {
            res.status(404).json({
                success: false,
                message: "invalid token"
            })
        }
        req.user = decode;
        next();
    } catch (error) {
        res.json({
            data: false,
            message: error.message,
        })
    }
}

module.exports = authmiddleware