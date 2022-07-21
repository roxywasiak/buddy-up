const { Router } = require("express");

const {} = require("../../controllers/api/messages");

const router = Router();

router.post("/:id", createMessage);
router.get("/:id", getMessagesById);

module.exports = router;
