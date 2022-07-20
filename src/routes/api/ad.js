const { Router } = require("express");

const {
  createAd,
  updateAd,
  deleteAd,
  getAdById,
  getAdsBySubjectId,
  getAllAds,
} = require("../../controllers/api/ad");

const router = Router();

router.post("/", createAd);
router.put("/:id", updateAd);
router.delete("/:id", deleteAd);
router.get("/:id", getAdById);
router.get("/view/subject/:subjectName", getAdsBySubjectId);
router.get("/", getAllAds);

module.exports = router;
