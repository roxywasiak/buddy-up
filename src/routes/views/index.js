const { Router } = require("express");

const {
  renderHomePage,
  renderAuthPage,
  renderStudentDashboard,
  renderTutorDashboard,
} = require("../../controllers/views");

const auth = require("../../middlewares/auth");

const router = Router();

router.get("/", renderHomePage);
router.get("/auth", renderAuthPage);
router.get("/student-dashboard", auth, renderStudentDashboard);
router.get("/tutor-dashboard", auth, renderTutorDashboard);

module.exports = router;
