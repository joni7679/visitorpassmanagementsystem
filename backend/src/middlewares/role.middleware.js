const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                message: `not allowed ${req.user.role}`
            })
        }
        console.log("role", req.user.role)
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: "access denided"
            });
        }
        next();
    };
};

module.exports = authorizeRoles;
