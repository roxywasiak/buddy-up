const { Router } = require("express");

const {
  createMessage,
  getMessagesById,
} = require("../../controllers/api/messages");

const router = Router();

router.post("/", createMessage);
router.get("/:id", getMessagesById);

module.exports = router;
