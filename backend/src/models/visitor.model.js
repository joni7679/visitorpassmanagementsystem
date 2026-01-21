const mongoose = require("mongoose");
const visiterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
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
        enum: ["approved", "rejected", "pending"],
        default: "pending"
    }
}, {
    timestamps: true
})

const visiterModel = mongoose.model("visiter", visiterSchema);
module.exports = visiterModel;

