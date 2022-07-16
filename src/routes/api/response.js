const { Router } = require("express");

const {
  createResponse,
  updateResponse,
  getResponseByUserId,
} = require("../../controllers/api/response");

const router = Router();

router.post("/", createResponse);
router.put("/:id", updateResponse);
router.get("/id", getResponseByUserId);

module.exports = router;
