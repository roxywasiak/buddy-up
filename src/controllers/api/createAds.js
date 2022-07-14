const { Student, Tutor } = require("../../models");

const createAd = async () => {
  try {
    const id = req.sessions.user.id;
    const userType = req.sessions.user.userType;
    if (userType === "student") {
      const data = await Student.findByPk(id);
      const { priceId, location, isRemote, lat, long } = req.body;
      await Student.update({
        priceId,
        location,
        isRemote,
        lat,
        long,
      });
      return res.json({ success: true, data });
    }
    if (userType === "tutor") {
      const data = await Tutor.findByPk(id);

      return res.json({ success: true, data });
    }
    if (userType !== "tutor" && userType !== "student") {
      return res.status(404).json({ success: false });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to get user| ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

module.exports = {
  createAd,
};
