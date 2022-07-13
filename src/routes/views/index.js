const { Router } = require("express");

const {
  renderHomePage,
  renderAuthPage,
  renderStudentDashboard,
  renderTutorDashboard,
} = require("../../controllers/views");

const router = Router();

router.get("/", renderHomePage);
router.get("/auth", renderAuthPage);
router.get("/student-dashboard", renderStudentDashboard);
router.get("/tutor-dashboard", renderTutorDashboard);

module.exports = router;
