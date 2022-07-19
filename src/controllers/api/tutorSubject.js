const { TutorSubject, Subject } = require("../../models");

const createTutorSubject = async (req, res) => {
  try {
    console.log(req.body);
    const { userType, subjectId, level } = req.body;

    if (userType === "tutor") {
      const tutorId = req.session.user.id;

      const subject = await Subject.findOne({ where: { id: subjectId } });

      if (!subject) {
        return res.status(404).json({ success: false });
      }

      console.log(tutorId, subjectId, level);

      await TutorSubject.create({ tutorId, subjectId, level });

      return res.json({ success: true });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create TutorSubject | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

module.exports = { createTutorSubject };
