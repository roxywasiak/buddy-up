const { Student, Tutor } = require("../../models");

const studentLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(req.body);

    const student = await Student.findOne({ where: { email } });

    if (!student) {
      console.log(
        `[ERROR]: Failed to login | No user found with email: ${email}`
      );

      return res.status(500).json({ success: false });
    }

    const isAuthorised = await student.checkPassword(password);

    if (isAuthorised) {
      req.session.save(() => {
        req.session.isLoggedIn = true;
        req.session.user = student.getUser();
        return res.json({ success: true });
      });
    } else {
      console.log(
        `[ERROR]: Failed to login | Incorrect password for email: ${email}`
      );

      return res.status(500).json({ success: false });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to login | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};
const studentCreate = (req, res) => {};
const studentLogout = (req, res) => {};
const tutorLogin = (req, res) => {};
const tutorCreate = (req, res) => {};
const tutorLogout = (req, res) => {};

module.exports = {
  studentLogin,
  studentCreate,
  studentLogout,
  tutorLogin,
  tutorCreate,
  tutorLogout,
};
