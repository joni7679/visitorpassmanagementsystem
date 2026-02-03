const rateLimit = require("express-rate-limit");

const loginLimit = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 4,
    message: {
        success: false,
        message: "Too Many creation. Please try again after one minutes"
    },
    standardHeaders: true,
    legacyHeaders: false,
    statusCode: 429
})
module.exports = loginLimit