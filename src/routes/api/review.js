const { Router } = require("express");

const {
  getReviews,
  reviewById,
  newReview,
} = require("../../controllers/api/review");

const router = Router();

router.get("/", getReviews);
router.get("/:id", reviewById);

router.post("/", newReview);

module.exports = router;
