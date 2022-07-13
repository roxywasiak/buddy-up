const { Router } = require("express");

const { getDashboard } = require("../../controllers/api/dashboard");

const router = Router();

router.get("/", getDashboard);

module.exports = router;
