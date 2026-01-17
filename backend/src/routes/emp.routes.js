
const express = require("express");
const authmiddleware = require("../middlewares/auth.middleware");
const { getEmployees } = require("../controllers/employee.controllers");
const authorizeRoles = require("../middlewares/role.middleware");
const router = express.Router();
router.get("/employees", authmiddleware,  authorizeRoles("admin", "visitor"), getEmployees)

module.exports = router