const { Student, Tutor, Ad, Response } = require("../../models");

const createResponse = async () => {
  try {
    const id = req.sessions.user.id;
    const userType = req.sessions.user.userType;
    if (userType === "student") {
      const data = await Student.findByPk(id);
      if (data) {
        //create response for student
        await Response.create();
      }
      return res.json({ success: true, data });
    }
    if (userType === "tutor") {
      const data = await Tutor.findByPk(id);

      return res.json({ success: true, data });
    }
    if (userType !== "tutor" && userType !== "student") {
      return res.status(500).json({ success: false });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to get user| ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const updateResponse = async () => {
  try {
    const id = req.sessions.user.id;
    const userType = req.sessions.user.userType;
    if (userType === "student") {
      const data = await Student.findByPk(id);
      if (data) {
        //update response
        Response.update();
      }
      return res.json({ success: true, data });
    }
    if (userType === "tutor") {
      const data = await Tutor.findByPk(id);

      return res.json({ success: true, data });
    }
    if (userType !== "tutor" && userType !== "student") {
      return res.status(500).json({ success: false });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to get user| ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

module.exports = {
  createResponse,
  updateResponse,
};

// student post a ad
// view all ads - button on front

// create response by id
// get respone by id
