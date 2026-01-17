const userModel = require("../models/user.model");

exports.getEmployees = async (req, res) => {
    try {
        const employeeData = await userModel.find({ role: "employee" }).select("-password  -email -createdAt -updatedAt");
        res.status(200).json({
            success: true,
            message: "employee data fetch successfully",
            data: employeeData
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "server error",
        })
    }
}