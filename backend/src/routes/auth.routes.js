const express = require("express");
const router = express.Router();
const { userRegister, userLogin, userLogOut, userProfile, dashboard } = require("../controllers/auth.controller");
const authmiddleware = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");
router.post("/register", userRegister)
router.post("/login", userLogin)
router.get("/profile", authmiddleware, userProfile);
router.get("/admin/dashboard", authmiddleware, authorizeRoles("admin"), dashboard);
router.get("/employee/dashboard", authmiddleware, authorizeRoles("employee"), dashboard);
router.get("/security/dashboard", authmiddleware, authorizeRoles("security"), dashboard);
router.get("/visitor/dashboard", authmiddleware, authorizeRoles("visitor"), dashboard);
router.post("/logout",authmiddleware, userLogOut)
module.exports = router;
