const validator = require('validator');
const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { default: Domain } = require('twilio/lib/base/Domain');
const allowedRole = ["admin", "employee", "security", "visitor"]

const isProduction = process.env.NODE_ENV === "production"

const getExpiryByRole = (role) => {
    switch (role) {
        case "admin":
            return "6h";
        case "employee":
            return "10h";
        case "security":
            return "7h";
        case "visitor":
        default: return "48h"
    }
}
const generateToken = (userId, role) => {
    return jwt.sign({ id: userId, role }, process.env.JWT_SECRET_KEY, { expiresIn: getExpiryByRole(role) })
}
exports.userRegister = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const finalRole = allowedRole.includes(role) ? role : "visitor";

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "please provided all required fields",
            })
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "this email is invalid, please enter a valid email here",
            })
        }
        if (!validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        })) {
            return res.status(400).json({
                success: false,
                message: "password minimum 8 characters must be there, at least one uppercase letter, one lowercase, one number and one symbol",
            })
        }
        const isuseralreadyExist = await userModel.findOne({ email });
        if (isuseralreadyExist) {
            return res.status(409).json({
                success: false,
                message: "user already exist please login"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = await userModel.create({ name, email, password: hashPassword, role: finalRole });
        const { password: pwd, ...safeuser } = user.toObject();
        const token = generateToken(user._id, user.role);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            partitioned: true,
            maxAge: 2 * 24 * 60 * 60 * 1000,
            path: "/"

        })
        res.status(201).json({
            success: true,
            message: "user registered successfully",
            data: safeuser,

        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "internal server error",
        })
    }
}

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "please all fields are required",
            })

        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found please register first"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "Password is incorrect, please try again"
            })
        }
        const { password: pwd, ...safeuser } = user.toObject();
        const token = generateToken(user._id, user.role);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            partitioned: true,
            maxAge: 2 * 24 * 60 * 60 * 1000,
            path: "/"
        })
        res.status(200).json({
            success: true,
            message: "login successfully",
            data: safeuser,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            message: error.message
        })
    }
}

exports.userProfile = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "welcome profile page",
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            message: error.message
        })
    }
}

exports.dashboard = (req, res) => {
    const role = req.user.role;

    if (role === "admin") {
        return res.status(200).json({
            success: true,
            message: "wellcome admin",

        })
    }

    if (role === "employee") {
        return res.status(200).json({
            success: true,
            message: "wellcome employee",
        })
    }
    if (role === "security") {
        return res.status(200).json({
            success: true,
            message: "wellcome security",
        })
    }
    res.status(200).json({
        success: true,
        message: "wellcome visistor",
    })
}

exports.userLogOut = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            partitioned: true,
            path: "/"
        })
        res.status(200).json({
            success: true,
            message: "User logout successfully !"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "internal server error",
        })
    }
}