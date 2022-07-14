const { Router } = require("express");

const { createAd } = require("../../controllers/api/createAds");

const router = Router();

router.put("/:id", createAd);
