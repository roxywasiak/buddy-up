const { Report } = require("../../models");

const createReport = async (req, res) => {
  try {
    // create new add
    const report = req.body;

    // create new ad
    const newReport = await Response.create(report);

    // send response
    return res.json(newReport);
  } catch (error) {
    console.log(`[ERROR]: Failed to create report | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const getReport = async (req, res) => {
  try {
    // get allReviews from DB
    const getAllReports = await Report.findAll();

    // send the reviews in the response
    return res.json(getAllReports);
  } catch (error) {
    console.log(`[ERROR]: Failed to get reports| ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const getReportById = async (req, res) => {
  try {
    const getSingleReport = await Report.findByPk(req.params.id);
    if (getSingleReport) {
      return res.json(getSingleReport);
    }
    return res
      .status(404)
      .json({ success: false, message: "Report does not exist" });
  } catch (error) {
    console.log(`[ERROR]: Failed to get report | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createReport,
  getReport,
  getReportById,
};
