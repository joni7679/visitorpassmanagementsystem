const express = require("express");
const authmiddleware = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");
const { createVisitedRequest, getAllVisitorsRequests, visiterRequest, approveVisiterRequest, rejectVisiterRequest, getAllApprovedVisitors } = require("../controllers/visitor.controller");
const router = express.Router();
router.post("/create-visit-req", authmiddleware, authorizeRoles("employee", "visitor"), createVisitedRequest);
router.get("/get-all-visit-req", authmiddleware, authorizeRoles("employee"), getAllVisitorsRequests)
router.get("/my-visit-req", authmiddleware, authorizeRoles("visitor"), visiterRequest);
router.patch("/approve-visit-req/:id", authmiddleware, authorizeRoles("employee"), approveVisiterRequest)
router.patch("/reject-visit-req/:id", authmiddleware, authorizeRoles("employee"), rejectVisiterRequest)
router.get("/approved-visiters", authmiddleware, authorizeRoles("employee"), getAllApprovedVisitors);
module.exports = router