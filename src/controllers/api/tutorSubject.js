const { TutorSubject, Subject } = require("../../models");

const createSubject = async () => {
  try {
    const { userType, subjectName, details } = req.body;
    if (userType === "tutor") {
      await Subject.create({ subjectName, details });

      res.status(200).json({ success: true });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create subject | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const createTutorSubject = async (req, res) => {
  try {
    const { subjectId, userType } = req.body;

    if (userType === "tutor") {
      const tutorId = req.session.user.id;

      await TutorSubject.create({ tutorId, subjectId, level });

      return res.json({ success: true });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create TutorSubject | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const updateSubject = async (req, res) => {};
module.exports = { createTutorSubject, updateSubject };
