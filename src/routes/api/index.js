const { Router } = require("express");

// const studentDashboard = require(".");
// const tutorDashboard = require("../tutorDashboard");
const ad = require("./ad");
const student = require("./student");
const response = require("./response");
const review = require("./review");
const subject = require("./subject");
const tutorSubject = require("./tutorSubject");
const tutor = require("./tutor");
const messages = require("./messages");

const router = Router();
router.use("/ad", ad);
router.use("/student", student);
router.use("/tutor", tutor);
router.use("/response", response);
router.use("/review", review);
router.use("/subject", subject);
router.use("/tutorSubject", tutorSubject);
router.use("/messages", messages);

module.exports = router;
