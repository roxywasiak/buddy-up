const {
  getTutorPayload,
  getStudentPayload,
} = require("../../helpers/signupHelpers");
const { Student, Tutor } = require("../../models");

const login = async (req, res) => {
  try {
    let user;
    const { email, password, userType } = req.body;

    if (userType === "student") {
      user = await Student.findOne({ where: { email } });
    } else {
      user = await Tutor.findOne({ where: { email } });
    }

    if (!user) {
      console.log(
        `[ERROR]: Failed to login | No user found with email: ${email}`
      );

      return res.status(500).json({ success: false });
    }

    const isAuthorised = await user.checkPassword(password);

    if (isAuthorised) {
      req.session.save(() => {
        req.session.isLoggedIn = true;
        req.session.user = user.getUser();
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

const signup = async (req, res) => {
  try {
    let payload;
    let user;
    const { userType } = req.body;
    if (userType === "tutor") {
      payload = getTutorPayload(req.body);
      user = await Tutor.findOne({ where: { email: payload.email } });
    }
    if (userType === "student") {
      payload = getStudentPayload(req.body);
      user = await Student.findOne({ where: { email: payload.email } });
    }
    if (!payload) {
      console.log(`[ERROR]: Bad Request | No payload`);
      return res.status(402).json({ success: false });
    }

    if (user) {
      console.log(
        `[ERROR]: Failed to create user | Account already exists with email: ${email}`
      );

      return res.status(500).json({ success: false });
    }

    await user.create(payload);
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create user | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const logout = (req, res) => {
  if (req.session.isLoggedIn) {
    req.session.destroy(() => {
      return res.status(204).end();
    });
  } else {
    return res.status(404).end();
  }
};

module.exports = {
  login,
  signup,
  logout,
};
