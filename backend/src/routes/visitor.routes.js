const express = require("express");
const authmiddleware = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");
const { createVisitedRequest, getAllVisitorsRequests, visiterRequest } = require("../controllers/visitor.controller");
const router = express.Router();
router.post("/create-visit-req", authmiddleware, authorizeRoles("employee", "visitor"), createVisitedRequest);
router.get("/get-all-visit-req", authmiddleware, authorizeRoles("employee"), getAllVisitorsRequests)
router.get("/my-visit-req", authmiddleware , authorizeRoles("visitor"),visiterRequest)
module.exports = router