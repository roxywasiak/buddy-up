const { Router } = require("express");

const studentDashboard = require("./studentDashboard");
const tutorDashboard = require("./tutorDashboard");

const router = Router();

router.use("/studentDashboard", studentDashboard);
router.use("/tutorDashboard", tutorDashboard);

module.exports = router;
