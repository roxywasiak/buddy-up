const { Router } = require("express");

const { getAds } = require("../../controllers/api/viewAds");

const router = Router();

router.post("/", getAds);

module.exports = router;
