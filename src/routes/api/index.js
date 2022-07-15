const { Router } = require("express");

// const studentDashboard = require(".");
// const tutorDashboard = require("../tutorDashboard");
const ad = require("./ad");

const router = Router();
router.use("/ad", ad);
// router.use("/studentDashboard", studentDashboard);
// router.use("/tutorDashboard", tutorDashboard);

module.exports = router;
