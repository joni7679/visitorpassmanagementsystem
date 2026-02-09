const mongoose = require("mongoose");
const visiterSchema = new mongoose.Schema({
    visitorId: {
        type: String,
        required: false,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    }
    ,
    phone: {
        type: String,
        required: true,
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    employeeid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employee",
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["approved", "rejected", "pending", "check-in", "check-out"],
        default: "pending"
    },
    qrCode: {
        type: String,
        required: false
    },
    checkInTime: {
        type: Date,
        required: false,
    },
    checkOutTime: {
        type: Date,
        required: false,
    },
}, {
    timestamps: true
})

const visiterModel = mongoose.model("visiter", visiterSchema);
module.exports = visiterModel;

