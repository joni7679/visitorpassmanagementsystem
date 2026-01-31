const visiterModel = require("../models/visitor.model");

exports.visiterPassVerify = async (req, res) => {
    try {
        const visitorId = req.params.visitorId;
        console.log("visitorid", visitorId);
        if (!visitorId) {
            return res.status(400).json({
                success: false,
                message: "visitor is required"
            })
        }
        const visitorData = await visiterModel.findOne({ visitorId });
        if (!visitorData) {
            return res.status(404).json({
                success: false,
                message: "visitor id not found "
            })
        }
        return res.status(200).json({
            success: true,
            message: "visitor pass verified successfully",
            data: visitorData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}

exports.checkInVisitor = async (req, res) => {
    try {
        const visitorId = req.params.visitorId;
        console.log("visitorid", visitorId);
        const visitorData = await visiterModel.findOne({ visitorId, status: "approved" })
        if (!visitorData) {
            return res.status(404).json({
                success: false,
                message: "visitor not found!"
            })
        }

        if (visitorData.status === "check-in") {
            return res.status(400).json({
                success: false,
                message: "visitor already check in!"
            })
        }
        visitorData.checkInTime = new Date().toISOString();
        visitorData.status = "check-in";
        await visitorData.save()

        return res.status(200).json({
            success: true,
            message: "visitor checked in successfully",
            data: visitorData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}

exports.checkOutVisitor = async (req, res) => {
    try {
        const visitorId = req.params.visitorId;
        console.log("visitorid", visitorId);
        const visitorData = await visiterModel.findOne({ visitorId })

        if (!visitorData) {
            return res.status(404).json({
                success: false,
                message: "visitor  not found!"
            })
        }
        if (visitorData.status === "check-out") {
            return res.status(400).json({
                success: false,
                message: "visitor already check out"
            })
        }
        visitorData.checkOutTime = new Date().toISOString();
        visitorData.status = "check-out";
        await visitorData.save()
        return res.status(200).json({
            success: true,
            message: "visitor check-out successfully",
            data: visitorData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}

exports.getAllCheckInAndCheckOutVisitor = async (req, res) => {
    try {
        const visitorData = await visiterModel.find({ status: { $in: ["check-in", "check-out"] } })
        if (!visitorData) {
            return res.status(400).json({
                success: false,
                message: "data not found "
            })
        }
        return res.status(200).json({
            success: true,
            message: "fetch all visitor chek-in and check-out data",
            data: visitorData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}

exports.rejectVisitor = async (req, res) => {
    try {
        const visitorId = req.params.visitorId;
        const visitorData = await visiterModel.findOne({ visitorId })

        if (!visitorData) {
            return res.status(404).json({
                success: false,
                message: "visitor  not found!"
            })
        }

        


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}