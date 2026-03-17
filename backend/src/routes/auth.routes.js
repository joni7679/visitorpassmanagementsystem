const express = require("express");
const router = express.Router();
const { userRegister, userLogin, userLogOut, userProfile, getUserByRole, deleteUser, updateUser, getSingleUserById, getVisitor } = require("../controllers/auth.controller");
const authmiddleware = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");
const loginLimit = require("../middlewares/loginLimit");
const upload = require("../middlewares/multer");
router.post("/register", userRegister)
router.post("/login", loginLimit, userLogin)
router.get("/profile", authmiddleware, userProfile);
router.post("/logout", authmiddleware, userLogOut)
router.get("/get-visitor", authmiddleware, authorizeRoles("employee"), getVisitor)
router.get("/getuserbyrole", authmiddleware, authorizeRoles("admin"), getUserByRole)
router.get("/user/:id", authmiddleware, authorizeRoles("admin"), getSingleUserById)
router.put("/user/:id", authmiddleware, authorizeRoles("admin"), updateUser)
router.delete("/delete-user/:id", authmiddleware, authorizeRoles("admin"), deleteUser)
module.exports = router;
