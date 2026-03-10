const visiterModel = require("../models/visitor.model");
const nanoid = require("nanoid")
const sendMail = require("../utils/sendEmail");
const generateVisitorPdf = require("../utils/generateVisitorPdf.js");
const generatedQrCodePass = require("../utils/generatedQrCodePass");
const cloudinary = require("../config/cloudinary.js")

const getLocationByPurpose = (purpose) => {
    switch (purpose) {
        case "metting":
            return "main office floor-1";
        case "interview":
            return "hr cabin, 3rd floor";
        case "delivery":
            return "reaception area,ground floor";
        case "vendor/maintence":
            return "basement";
        default:
            return "ground floor"
    }
}
exports.createVisitedRequest = async (req, res) => {
    const { name, email, phone, userid, employeeid, date, time, purpose, } = req.body;
    if (!name || !email || !phone || !userid || !employeeid || !date || !time || !purpose) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }
    if (!req.file) {
        return res.status(400).json({
            message: "visitor img upload is  required"
        })
    }
    const uploadResult = await new Promise((res, rej) => {
        cloudinary.uploader.upload_stream(
            {
                folder: "visiter-images",
                fetch_format: "auto",
                quality: "auto"
            },
            (error, result) => {
                if (error) rej(error)
                else res(result)
            }
        ).end(req.file.buffer)
    })
    const imageUrl = uploadResult.secure_url
    try {
        const location = getLocationByPurpose(purpose)
        const visitUser = await visiterModel.create({ visitorId: nanoid.nanoid(12), name, email, phone, userid, employeeid, date, time, purpose, location: location, image: imageUrl });
        return res.status(201).json({
            message: "visit Requested successfully.",
            data: visitUser
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
exports.getAllVisitorsRequests = async (req, res) => {
    const employeeid = req.user.id;
    if (!employeeid) {
        return res.status(404).json({
            message: "employee id not found"
        })
    }
    try {
        const visitors = await visiterModel.find({ employeeid });
        return res.status(200).json({
            message: "visit requestes fetched succesfully",
            data: visitors
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
exports.visiterRequest = async (req, res) => {
    const userid = req.user.id;
    if (!userid) {
        return res.status(404).json({
            message: "userid id not found"
        })
    }

    try {
        const data = await visiterModel.find({ userid }).sort({ updatedAt: - 1 });
        return res.status(200).json({
            message: "my visit requests fetched succesfully",
            data: data,
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
exports.approveVisiterRequest = async (req, res) => {
    const id = req.params.id;
    try {
        const upDateVist = await visiterModel.findByIdAndUpdate(id, { status: "approved" }, { new: true })
        const qrCode = await generatedQrCodePass(upDateVist.visitorId);
        upDateVist.qrCode = qrCode;
        await upDateVist.save()
        const pdfBuffer = await generateVisitorPdf(qrCode);
        await sendMail({
            to: upDateVist.email,
            name: upDateVist.name,
            status: upDateVist.status,
            pdfBuffer,
        })
        return res.status(200).json({
            message: "visiter request approved successfully",
            data: upDateVist,
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
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
            message: "visiter request rejected successfully",
            data: upDateVist,
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
exports.getAllApprovedVisitors = async (req, res) => {
    const employeeid = req.params.employeeid;
    try {
        const approvedVisitors = await visiterModel.find({ status: "approved", employeeid: employeeid });
        return res.status(200).json({
            message: "approved visitors fetched successfully",
            data: approvedVisitors
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
exports.getAllRejectedVisitors = async (req, res) => {
    try {
        const rejectedVisitor = await visiterModel.find({ status: "rejected" });
        return res.status(200).json({
            message: "rejected  visitors fetched successfully",
            data: rejectedVisitor
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}