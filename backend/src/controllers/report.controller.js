const visiterModel = require("../models/visitor.model");
exports.getVisitorStatusCount = async (req, res) => {
    try {
        const userId = req.user.id;
        const role = req.user.role;
        let filter = {};
        if (role === "employee") {
            filter.employeeid = userId
        }
        if (role === "visitor") {
            filter.userid = userId
        }
        const total = await visiterModel.countDocuments(filter);
        const approved = await visiterModel.countDocuments({ ...filter, status: "approved" });
        const rejected = await visiterModel.countDocuments({ ...filter, status: "rejected" });
        const pending = await visiterModel.countDocuments({ ...filter, status: "pending" });
        return res.status(200).json({
            success: true,
            data: {
                total, approved, rejected, pending
            }
        })
    } catch (error) {
        console.log("something is wrong");
    }
}