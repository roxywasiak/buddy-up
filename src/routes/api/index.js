const { Router } = require("express");

const homePage = require("./homePage.js");
const authPage = require("./authPage.js");
const studentDashboard = require("./studentDashboard");
const tutorDashboard = require("./tutorDashboard");

const router = Router();

router.use("/homePage", homePage);
router.use("/authPage", authPage);
router.use("/studentDashboard", studentDashboard);
router.use("/tutorDashboard", tutorDashboard);

module.exports = router;
