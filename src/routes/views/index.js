const { Router } = require("express");

const {
  renderHomePage,
  renderAuthPage,
  renderStudentDashboard,
  renderTutorDashboard,
  renderCreateAdsPage,
  renderViewAdsPage,
  renderSessionsPage,
} = require("../../controllers/views");

const auth = require("../../middlewares/auth");

const router = Router();

router.get("/", renderHomePage);
router.get("/auth", renderAuthPage);
router.get("/student-dashboard", auth, renderStudentDashboard);
router.get("/tutor-dashboard", auth, renderTutorDashboard);
router.get("/createAds", auth, renderCreateAdsPage);
router.get("/viewAds", auth, renderViewAdsPage);
router.get("/sessions", auth, renderSessionsPage);

module.exports = router;
