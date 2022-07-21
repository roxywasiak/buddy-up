const { Router } = require("express");

const {
  getAllTutors,
  getTutorById,
  updateTutor,
  deleteTutor,
} = require("../../controllers/api/tutor");

const router = Router();

router.get("/:id", getTutorById);
router.get("/", getAllTutors);

router.put("/", updateTutor);
router.delete("/:id", deleteTutor);

module.exports = router;
