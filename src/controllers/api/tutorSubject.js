const { TutorSubject } = require("../../models");

const createTutorSubject = async (req, res) => {
  try {
    const { subjectId } = req.body;

    const userId = req.session.user.id;

    await TutorSubject.create({ userId, subjectId, level });

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create TutorSubject | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const updateSubject = async (req, res) => {};
module.exports = { createTutorSubject, updateSubject };
