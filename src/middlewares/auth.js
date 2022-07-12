const auth = (req, res, next) => {
  if (req.session.isLoggedIn) {
    console.log(`[INFO]: User ${req.session.user.email} is in session`);
    return next();
  }
  if (res.session.user.userType === "tutor") {
    return res.redirect("/tutor-login");
  }
  return res.redirect("/student-login");
};

module.exports = auth;
