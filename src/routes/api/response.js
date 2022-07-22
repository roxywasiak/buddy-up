const { Router } = require("express");

const {
  createResponse,
  updateResponse,
  getResponseByUserId,
  getAllReponsesByUserId,
} = require("../../controllers/api/response");

const router = Router();

router.post("/", createResponse);
router.put("/:id", updateResponse);
router.get("/", getResponseByUserId);
router.get("/all", getAllReponsesByUserId);

module.exports = router;
