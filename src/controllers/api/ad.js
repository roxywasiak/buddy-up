const { Student, Tutor, Ad } = require("../../models");

const createAd = async () => {
  try {
    const id = req.sessions.user.id;
    const userType = req.sessions.user.userType;
    if (userType === "student") {
      const data = await Student.findByPk(id);
      if (data) {
        //create the new add for student
        Ad.create();
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
  createAd,
};
