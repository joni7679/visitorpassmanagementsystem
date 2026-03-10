const validator = require('validator');
const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
    return jwt.sign({ id: userId, }, process.env.JWT_SECRET_KEY, { expiresIn: "2d" })
}
exports.userRegister = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) {
            res.status(400).json({
                message: "please provided all required fields",
            })
        }
        if (!validator.isEmail(email)) {
            res.status(400).json({
                message: "invalid email id",
            })
        }
        if (!validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        })) {
            res.status(400).json({
                message: "password minimum 8 characters must be there, at least one uppercase letter, one lowercase, one number and one symbol",
            })
        }
        const isuseralreadyExist = await userModel.findOne({ email });
        if (isuseralreadyExist) {
            res.status(409).json({
                message: "user already exist please login in"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = await userModel.create({ name, email, password: hashPassword, role });
        const { password: pwd, ...safeuser } = user.toObject();
        const token = generateToken(user._id);
        if (user.role === "visitor") {
            res.cookie("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                partitioned: true,
                maxAge: 2 * 24 * 60 * 60 * 1000,
                path: "/"
            })
        }
        res.status(201).json({
            message: "user register successfully...",
            data: safeuser,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({
                message: "please all fields are required",
            })
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            res.status(404).json({
                message: "user not found please register first"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            res.status(401).json({
                message: "Password is incorrect, please try again"
            })
        }
        const { password: pwd, ...safeuser } = user.toObject();
        const token = generateToken(user._id);
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
            message: error.message
        })
    }
}

exports.userProfile = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id).select("-password");
        if (!user) {
            res.status(404).json({
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
            message: error.message
        })
    }
}

exports.dashboard = (req, res) => {
    const role = req.user.role;
    if (role === "admin") {
        res.status(200).json({
            success: true,
            message: "wellcome admin",
        })
    }

    if (role === "employee") {
        res.status(200).json({
            success: true,
            message: "wellcome employee",
        })
    }
    if (role === "security") {
        res.status(200).json({
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
            message: error.message
        })
    }
}

exports.getUserByRole = async (req, res) => {
    try {
        const users = await userModel.find({ role: { $in: ["employee", "security"] } }).select("-password");
        res.status(200).json({
            message: "fetch all user data",
            data: users
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await userModel.findByIdAndDelete(userId);
        if (!user) {
            res.status(404).json({
                message: "user id not found!"
            })
        }
        res.status(200).json({
            success: true,
            message: "user delete successfully !"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getSingleUserById = async (req, res) => {
    const id = req.params.id;
    try {
        if (!id) {
            res.status(404).json({
                message: "id not found please valid id here"
            })
        }
        const user = await userModel.findById(id).select("-password");
        res.status(200).json({
            message: "single user id fetch successfully",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name, email, role } = req.body;
    try {
        const user = await userModel.findByIdAndUpdate(userId, { name, email, role }, { new: true });
        if (!user) {
            res.status(404).json({
                success: false,
                message: "user id not found!"
            })
        }
        res.status(200).json({
            success: true,
            message: "user data update successfully !",
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.getVisitor = async (req, res) => {
    try {
        const visitorData = await userModel.find({ role: "visitor" }).select("-password  -createdAt -updatedAt");
        res.status(200).json({
            success: true,
            message: "visitor data fetch successfully",
            data: visitorData
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}