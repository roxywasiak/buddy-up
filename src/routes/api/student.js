const { Router } = require("express");

const {
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../../controllers/api/student");

const router = Router();

router.get("/:id", getStudentById);
router.get("/", getAllStudents);

router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
