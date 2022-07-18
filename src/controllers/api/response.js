const { Response } = require("../../models");

const createResponse = async (req, res) => {
  try {
    // create new add
    const { adId, status } = req.body;
    if (req.session.user.userType === "student") {
      await Response.create({
        studentId: req.session.user.id,
      });
    }
    if (req.session.user.userType === "tutor") {
      await Response.create({
        tutorId: req.session.user.id,
      });
    }

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
    const { userType, studentId, tutorId } = req.body;
    let data;

    if (userType === "student") {
      data = await Response.findAll({ where: { studentId: studentId } });
      return res.json({ success: true, data });
    }

    if (userType === "tutor") {
      data = await Response.findAll({
        where: { tutorId: tutorId },
      });
      return res.json({ success: true, data });
    }
    if (!data) {
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
