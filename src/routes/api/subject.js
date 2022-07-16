const { createSubject } = require("../../controllers/api/subject");
const { Router } = require("express");

const router = Router();

router.post("/", createSubject);

module.exports = router;
