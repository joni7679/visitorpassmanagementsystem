const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");
const userModel = require("../models/user.model");


const generateToekn = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET_KEY, { expiresIn: "2d" })
}

exports.userRegister = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "all fileds are required"
            })
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                message: "invalid email id",
            })
        }

        if (!validator.isStrongPassword(password,
            {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1,
            }
        )) {
            return res.json({
                message: "please enter password must 8 charters at lest one Upeercae , One Number , One symbols"
            })
        }

        const exitUser = await userModel.findOne({ email });
        if (exitUser) {
            return res.json({
                message: "user exit, please login.",
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = await userModel.create({ name, email, password: hashPassword, role });

        const token = generateToekn(user._id, user.role)
        if (user.role === "visitor") {
            res.cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: 'Strict',
                path: "/",
                maxAge: 2 * 24 * 60 * 60 * 1000
            })
        }
        res.status(201).json({
            message: "User register successfully",
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "all fileds are required"
            })
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "user not register please login first",

            })
        }
        const matchpassword = await bcrypt.compare(password, user.password)
        if (!matchpassword) {
            return res.status(400).json({
                message: "wrong password"
            })
        }
        const token = generateToekn(user._id, user.role)
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: 'Strict',
            path: "/",
            maxAge: 2 * 24 * 60 * 60 * 1000
        })
        res.status(201).json({
            message: "User login successfully",
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

exports.userProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await userModel.findById(userId);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

exports.userLogOut = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: false,
            sameSite: 'Strict',
            path: "/",
        })
        res.json({
            message: "user logout successfully"
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

exports.getVisitor = async (req, res) => {
    try {
        const visitor = await userModel.find({ role: "visitor" }).select("- password");
        res.status(200).json({
            message: "visitor successfully fetch ",
            data: visitor,
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

exports.getUserByRole = async (req, res) => {
    try {
        const user = await userModel.find({ role: { $in: ["employee", "security"] } }).select("-password")
        res.status(200).json({
            message: "visitor successfully fetch ",
            data: user,
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

exports.getSingleUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await userModel.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }

        return res.status(200).json({
            message: "fetch user single data",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, role } = req.body;
        const user = await userModel.findByIdAndUpdate(id, { name, email, role }, { new: true }).select("-password");
        return res.status(200).json({
            message: "update user data",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.findByIdAndDelete(id);
        return res.status(200).json({
            message: "delete user data",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}




