const visiterModel = require("../models/visitor.model");
const sendMail = require("../utils/sendEmail")

exports.createVisitedRequest = async (req, res) => {
    const { name, email, phone, userid, employeeid, date, time, purpose, location } = req.body;
    if (!name || !email || !phone || !userid || !employeeid || !date || !time || !purpose || !location) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }
    try {
        const visitUser = await visiterModel.create({ name, email, phone, userid, employeeid, date, time, purpose, location });
        return res.status(201).json({
            success: true,
            message: "visit Requested successfully !",
            data: visitUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `server error ${error.message}`
        })
    }
}

exports.getAllVisitorsRequests = async (req, res) => {
    const employeeid = req.user.id;
    if (!employeeid) {
        return res.status(404).json({
            success: false,
            message: "employee id not found"
        })
    }
    try {
        const visitors = await visiterModel.find({ employeeid });
        return res.status(200).json({
            success: true,
            message: "visit requestes fetched succesfully",
            data: visitors
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `server error ${error.message}`
        })
    }
}


exports.visiterRequest = async (req, res) => {
    const userid = req.user.id;
    if (!userid) {
        return res.status(404).json({
            success: false,
            message: "userid id not found"
        })
    }
    console.log("user id", userid)
    try {
        const data = await visiterModel.find({ userid });
        return res.status(200).json({
            success: true,
            message: "my visit requests fetched succesfully",
            data: data
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `server error ${error.message}`
        })
    }
}

exports.approveVisiterRequest = async (req, res) => {
    const id = req.params.id;
    try {
        const upDateVist = await visiterModel.findByIdAndUpdate(id, { status: "approved" }, { new: true })

        await sendMail({
            to: upDateVist.email,
            name: upDateVist.name,
            status: upDateVist.status,
        })
        return res.status(200).json({
            success: true,
            message: "visiter request approved successfully",
            data: upDateVist
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `server error ${error.message}`
        })
    }
}
exports.rejectVisiterRequest = async (req, res) => {
    const id = req.params.id;
    try {
        const upDateVist = await visiterModel.findByIdAndUpdate(id, { status: "rejected" }, { new: true })
        await sendMail({
            to: upDateVist.email,
            name: upDateVist.name,
            status: upDateVist.status,
        })
        return res.status(200).json({
            success: true,
            message: "visiter request rejected successfully",
            data: upDateVist
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `server error ${error.message}`
        })
    }
}

exports.getAllApprovedVisitors = async (req, res) => {
    try {
        const approvedVisitors = await visiterModel.find({ status: "approved" });

        return res.status(200).json({
            success: true,
            message: "approved visitors fetched successfully",
            data: approvedVisitors
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `server error ${error.message}`
        })
    }
}

exports.getAllRejectedVisitors = async (req, res) => {
    try {
        const rejectedVisitor = await visiterModel.find({ status: "rejected" });
        return res.status(200).json({
            success: true,
            message: "rejected  visitors fetched successfully",
            data: rejectedVisitor
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `server error ${error.message}`
        })
    }
}