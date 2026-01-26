const visiterModel = require("../models/visitor.model");
const nanoid = require("nanoid")
const sendMail = require("../utils/sendEmail");
const generateVisitorPdf = require("../utils/generateVisitorPdf.js");
const generatedQrCodePass = require("../utils/generatedQrCodePass")

const getLocationByPurpose = (purpose) => {
    switch (purpose) {
        case "Metting":
            return " Main Office Floor-1";
        case "Interview":
            return "Hr Cabin, 3rd Floor";
        case "Delivery":
            return "Reaception Area,Ground Floor";
        case "Vendor/ Maintence":
            return "Service Desk, Basement";
        default:
            return "Main Lobby, Ground Floor"
    }
}

exports.createVisitedRequest = async (req, res) => {
    const { name, email, phone, userid, employeeid, date, time, purpose, } = req.body;
    if (!name || !email || !phone || !userid || !employeeid || !date || !time || !purpose) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }
    try {
        const location = getLocationByPurpose(purpose)


        const visitUser = await visiterModel.create({ visitorId: nanoid.nanoid(12), name, email, phone, userid, employeeid, date, time, purpose, location: location });
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

    try {
        const data = await visiterModel.find({ userid });
        // const qrCode = await generatedQrCodePass(data.visitorId);
        return res.status(200).json({
            success: true,
            message: "my visit requests fetched succesfully",
            data: data,
        
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
        const qrCode = await generatedQrCodePass(upDateVist.visitorId);
        const pdfBuffer = await generateVisitorPdf(qrCode);
        await sendMail({
            to: upDateVist.email,
            name: upDateVist.name,
            status: upDateVist.status,
            pdfBuffer,
        })
        return res.status(200).json({
            success: true,
            message: "visiter request approved successfully",
            data: upDateVist,

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