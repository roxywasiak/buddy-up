const { Router } = require("express");
const {
  studentLogin,
  studentCreate,
  studentLogout,
  tutorLogin,
  tutorCreate,
  tutorLogout,
} = require("../../controllers/auth");

const router = Router();

router.post("/student-login", studentLogin);
router.post("/student-create", studentCreate);
router.post("/student-logout", studentLogout);
router.post("/tutor-login", tutorLogin);
router.post("/tutor-create", tutorCreate);
router.post("/tutor-logout", tutorLogout);

module.exports = router;
