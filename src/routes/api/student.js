const { Router } = require("express");

const {
  getStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../../controllers/api/student");

const router = Router();

router.get("/:id", getStudentById);
router.get("/", getStudent);

router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
