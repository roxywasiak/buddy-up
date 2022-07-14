const { Student, Tutor } = require("../../models");

const login = async (req, res) => {
  try {
    let user;
    const { email, password } = req.body;
    let userType;

    isStudent = await Student.findOne({ where: { email } });
    isTutor = await Tutor.findOne({ where: { email } });

    if (isStudent) {
      userType = "student";
      user = isStudent;
    } else if (isTutor) {
      userType = "tutor";
      user = isTutor;
    } else {
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

        return res.json({ success: true, userType: userType });
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
    let user;
    console.log(req.body);
    const { userType, firstName, lastName, email, password } = req.body;

    if (userType === "tutor") {
      user = await Tutor.findOne({ where: { email } });
    }
    if (userType === "student") {
      user = await Student.findOne({ where: { email } });
    }

    if (user) {
      console.log(
        `[ERROR]: Failed to create user | Account already exists with email: ${email}`
      );

      return res.status(500).json({ success: false });
    }
    if (!firstName || !lastName || !email || !password || !userType) {
      return res.status(404).json({ success: false });
    }

    if (userType === "tutor") {
      await Tutor.create({ firstName, lastName, email, password, userType });
    }
    if (userType === "student") {
      await Student.create({ firstName, lastName, email, password, userType });
    }
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
