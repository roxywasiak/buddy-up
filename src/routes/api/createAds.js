const { Router } = require("express");

const { createAd, updateAd } = require("../../controllers/api/createAds");

const router = Router();

router.create("/", createAd);
router.put("/:id", updateAd);

module.exports = router;
