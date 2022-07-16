const { Subject } = require("../../models");

const createSubject = async (req, res) => {
  try {
    const { userType, subjectName, details } = req.body;
    if (userType === "tutor") {
      await Subject.create({ subjectName, details });
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ success: false });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create subject | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

module.exports = { createSubject };
