const visiterModel = require("../models/visitor.model");

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
