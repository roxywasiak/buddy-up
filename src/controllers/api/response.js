const { Response, Ad } = require("../../models");

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
    //declare a changeable variable
    if (req.session.user.userType === "student") {
      //find buddy from response
      const buddyResponses = await Response.findAll({
        where: {
          studentId: req.session.user.id,
        },
      });
      const buddyResponsesData = buddyResponses.map(
        ({ dataValues }) => dataValues
      );

      //find user who created the ad
      const getAd = await Ad.findAll({
        where: { studentId: req.session.user.id },
      });

      const adIds = getAd.map(({ dataValues }) => dataValues.id);

      const adResponses = await Response.findAll({
        where: {
          adId: adIds,
        },
      });
      console.log(adResponses);

      const adResponseData = adResponses.map(({ dataValues }) => dataValues);
      console.log(adResponseData);
      const data = {
        userResponses: buddyResponsesData,
        receivedResponses: adResponseData,
      };
      return res.json({
        success: true,
        data,
      });
    }
    if (req.session.user.userType === "tutor") {
      //find Tutor
      const tutorResponse = await Response.findAll({
        where: {
          tutorId: req.session.user.id,
          status: "completed",
        },
      });

      const tutorResponseData = tutorResponse.map(
        ({ dataValues }) => dataValues.adId
      );

      const userResponses = await Ad.findAll({
        where: { id: tutorResponseData },
      });

      return res.json({
        success: true,
        data: { userResponses },
      });
    }

    if (
      req.user.session.userType !== "student" &&
      req.user.session.userType !== "tutor"
    ) {
      return res.status(404).json({ success: false });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to get all responses| ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

module.exports = {
  createResponse,
  updateResponse,
  getResponseByUserId,
};
