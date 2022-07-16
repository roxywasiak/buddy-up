const {
  createSubject,
  getAllSubjects,
} = require("../../controllers/api/subject");
const { Router } = require("express");

const router = Router();

router.post("/", createSubject);
router.get("/", getAllSubjects);

module.exports = router;
