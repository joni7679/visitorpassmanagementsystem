const express = require("express");
const visiterModel = require("../models/visitor.model");
const router = express.Router();

const verifyPass = async (req, res) => {
    try {
        const visitorId = req.params.visitorId;
        console.log("visitorid", visitorId);

        if (!visitorId) {
            return res.status(400).json({
                success: false,
                message: "visitor id is required"
            })
        }

        const visitorData = await visiterModel.findOne({ visitorId, status: "approved" });
        if (!visitorData) {
            return res.status(404).json({
                success: false,
                message: "visitor id not found or not approved"
            })
        }

        return res.status(200).json({
            success: true,
            message: "visitor pass verified successfully"
        })



    } catch (error) {

    }
}





module.exports = router;

