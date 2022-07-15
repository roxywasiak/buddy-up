const { Router } = require("express");

const { createAd, updateAd } = require("../../controllers/api/ad");

const router = Router();

router.post("/", createAd);
router.put("/:id", updateAd);

module.exports = router;
