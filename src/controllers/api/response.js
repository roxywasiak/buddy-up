const { Response, Ad } = require("../../models");

const createResponse = async (req, res) => {
  try {
    // create new add
    const { adId } = req.body;
    const { id, userType } = req.session.user;
    if (userType === "student") {
      await Response.create({
        studentId: id,
        adId,
        status: "pending",
      });
    }
    if (userType === "tutor") {
      await Response.create({
        tutorId: id,
        adId,
        status: "pending",
      });
    }

    // send response
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create response | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const updateResponse = async (req, res) => {
  try {
    // update response
    const { status } = req.body;
    const { userType, id: userId } = req.session.user;
    const { id } = req.params;
    if (
      status === "pending" ||
      status === "completed" ||
      status === "rejected"
    ) {
      const updatedResponse = await Response.update(
        { status },
        { where: (id = id) }
      );
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
    let data;
    if (req.session.user.userType === "student") {
      //find buddy from response
      const buddyResponses = await Response.findAll({
        where: {
          studentId: req.session.user.id,
          status: "completed",
        },
      });
      const buddyResponsesData = buddyResponses.map(
        ({ dataValues }) => dataValues
      );
      console.log(buddyResponsesData);

      //find user who created the ad
      const getAd = await Ad.findOne({
        where: { studentId: req.session.user.id },
      });

      const adResponses = await Response.findAll({
        where: {
          adId: getAd.dataValues.id,
          status: "completed",
        },
      });

      const adResponseData = adResponses.map(({ dataValues }) => dataValues);
      console.log(adResponseData);
      const data = [...buddyResponsesData, ...adResponseData];
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
      console.log(tutorResponse);

      const tutorResponseData = tutorResponse.map(
        ({ dataValues }) => dataValues.adId
      );
      console.log(tutorResponseData);

      const data = await Ad.findAll({
        where: { id: tutorResponseData },
      });
      console.log(data);

      return res.json({
        success: true,
        data,
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

const getAllReponsesByUserId = async (req, res) => {
  try {
    const { id, userType } = req.session.user;
    if (userType === "student") {
      const data = await Response.findAll({
        where: {
          studentId: id,
        },
      });
      if (!data) {
        return res.status(404).json({ success: false });
      }

      return res.json({ success: true, responseData: data });
    } else {
      const data = await Response.findAll({
        where: {
          tutorId: id,
        },
      });

      if (!data) {
        return res.status(404).json({ success: false });
      }

      console.log(data);
      return res.json({ success: true, responseData: data });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to get student | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

module.exports = {
  createResponse,
  updateResponse,
  getResponseByUserId,
  getAllReponsesByUserId,
};
