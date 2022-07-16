const { Router } = require("express");

const {
  createResponse,
  updateResponse,
  getResponseById,
} = require("../../controllers/api/response");

const router = Router();

router.post("/", createResponse);
router.put("/:id", updateResponse);
router.get("/:id", getResponseById);

module.exports = router;
