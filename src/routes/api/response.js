const { Router } = require("express");

const {
  createResponse,
  updateResponse,
} = require("../../controllers/api/response");

const router = Router();

router.post("/", createResponse);
router.put("/:id", updateResponse);

module.exports = router;
