const { Router } = require("express");

const {
  createResponse,
  updateResponse,
} = require("../../controllers/api/review");

const router = Router();

router.post("/", createResponse);
router.put("/:id", updateResponse);

module.exports = router;
