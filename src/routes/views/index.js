const { Router } = require("express");

const {
  renderHomePage,
  renderTutorLoginPage,
  renderStudentLoginPage,
  renderCreatePage,
  renderStudentDashboard,
  renderTutorDashboard,
  renderStudentLogoutPage,
  renderTutorLogoutPage,
} = require("../../controllers/views");

const router = Router();

router.get("/", renderHomePage);
router.get("/tutor-login", renderTutorLoginPage);
router.get("/student-Login", renderStudentLoginPage);
router.get("/create", renderCreatePage);
router.get("/student-dashboard", renderStudentDashboard);
router.get("/tutor-dashboard", renderTutorDashboard);
router.get("/student-logout", renderStudentLogoutPage);
router.get("/tutor-logout", renderTutorLogoutPage);

module.exports = router;
