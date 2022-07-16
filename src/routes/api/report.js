const { Router } = require("express");

const {
  createReport,
  getReport,
  getReportById,
} = require("../../controllers/api/report");

const router = Router();

router.get("/", getReport);
router.get("/:id", getReportById);

router.post("/", createReport);

module.exports = router;
