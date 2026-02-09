const express = require("express");
const authmiddleware = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");
const { getVisitorStatusCount } = require("../controllers/report.controller");
const router = express.Router();
router.get("/report", authmiddleware, authorizeRoles("admin" ,"visitor", "employee"), getVisitorStatusCount)
module.exports = router;
