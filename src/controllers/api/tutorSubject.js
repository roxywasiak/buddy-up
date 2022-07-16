const { TutorSubject, Subject } = require("../../models");

const createTutorSubject = async (req, res) => {
  try {
    const { userType, subjectName, level } = req.body;

    if (userType === "tutor") {
      const tutorId = req.session.user.id;

      const subject = await Subject.findOne({ where: { subjectName } });

      if (!subject) {
        return res.status(404).json({ success: false });
      }
      const { id } = subject;

      await TutorSubject.create({ tutorId, subjectId: id, level });

      return res.json({ success: true });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create TutorSubject | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

module.exports = { createTutorSubject };
