const authorizeRoles = (...roles) => {
    return (req, res, next) => {

        if (!req.user || !req.user.role) {
            return res.status(403).json({
                success: false,
                message: "Access denied"
            });
        }
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: `Role (${req.user.role}) is not allowed`
            });
        }
        next();
    };
};

module.exports = authorizeRoles;
