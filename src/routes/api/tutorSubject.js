const { createTutorSubject } = require("../../controllers/api/tutorSubject");

const { Router } = require("express");

const router = Router();

router.post("/", createTutorSubject);

module.exports = router;
