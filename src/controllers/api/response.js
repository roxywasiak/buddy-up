const { Response, Ad } = require("../../models");
const { findOne, findAll } = require("../../models/Subject");

const createResponse = async (req, res) => {
  try {
    // create new add
    const response = req.body;

    // create new ad
    const newResponse = await Response.create(response);

    // send response
    return res.json(newResponse);
  } catch (error) {
    console.log(`[ERROR]: Failed to create response | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const updateResponse = async (req, res) => {
  try {
    // update response
    const { status, userType, id } = req.body;
    if (userType !== "tutor" && userType !== "student") {
      return res.status(500).json({ success: false, error: error.message });
    }
    if (
      status === "pending" ||
      status === "completed" ||
      status === "rejected"
    ) {
      const updatedResponse = await Response.update({ status, id });
      return res.json(updatedResponse);
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create Response | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const getResponseByUserId = async (req, res) => {
  try {
    let data;

    if (req.session.userType === "student") {
      const getAd = await Ad.findAll({
        where: { studentId: req.session.user.id },
      });
      const { id } = getAd;
      data = await Response.findOne({
        where: { studentId: req.session.id, adId: id, status: "completed" },
      });
      return res.json({ success: true, data });
    }

    if (req.session.userType === "tutor") {
      data = await Ad.findAll({
        where: { tutorId: req.session.id },
      });
      const { id } = getAd;
      data = await Response.findOne({
        where: {
          tutorId: req.session.user.id,
          adId: id,
          status: "completed",
        },
      });
      return res.json({ success: true, data });
    }
    if (
      !data ||
      (req.session.userType !== "student" && req.session.userType !== "tutor")
    ) {
      return res.status(404).json({ success: false });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to get all reports| ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

module.exports = {
  createResponse,
  updateResponse,
  getResponseByUserId,
};
