const express = require("express");
const visiterModel = require("../models/visitor.model");
const authmiddleware = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");
const { visiterPassVerify, checkInVisitor, checkOutVisitor } = require("../controllers/pass.controller");
const router = express.Router();
router.get("/verify/:visitorId", authmiddleware, authorizeRoles("security"), visiterPassVerify);

router.patch("/check-in/:visitorId", authmiddleware,
    authorizeRoles("security"),
    checkInVisitor
)
router.patch("/check-out/:visitorId", authmiddleware,
    authorizeRoles("security"),
    checkOutVisitor
)



module.exports = router;

