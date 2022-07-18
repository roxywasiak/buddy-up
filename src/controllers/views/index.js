const { Subject, Tutor, Student } = require("../../models");

const renderHomePage = (req, res) => {
  return res.render("home", { currentPage: "home" });
};

const renderDashboard = (req, res) => {
  const { user } = req.session;
  return res.render("dashboard", { currentPage: "dashboard", user });
};
const renderAuthPage = (req, res) => {
  return res.render("auth", { currentPage: "auth" });
};

const renderCreateAdsPage = (req, res) => {
  return res.render("createAds", { currentPage: "createAds" });
};

const renderViewAdsPage = (req, res) => {
  return res.render("viewAds", { currentPage: "viewAds" });
};

const renderSessionsPage = (req, res) => {
  return res.render("sessions", { currentPage: "sessions" });
};

const renderCompleteProfilePage = async (req, res) => {
  const { user } = req.session;
  const subjectsFromDb = await Subject.findAll();

  const subjects = subjectsFromDb.map((subject) => {
    return subject.get({ plain: true });
  });

  return res.render("completeProfile", {
    currentPage: "completeProfile",
    subjects,
    user,
  });
};

const renderProfilePage = async (req, res) => {
  const { userType, id } = req.session.user;
  if (userType === "tutor") {
    const userDetails = (await Tutor.findAll({ where: { id }, raw: true }))[0];
    return res.render("profile", { currentPage: "profile", userDetails });
  } else if (userType === "student") {
    const userDetails = (
      await Student.findAll({ where: { id }, raw: true })
    )[0];
    return res.render("profile", { currentPage: "profile", userDetails });
  }
};

module.exports = {
  renderHomePage,
  renderDashboard,
  renderAuthPage,
  renderCreateAdsPage,
  renderViewAdsPage,
  renderSessionsPage,
  renderCompleteProfilePage,
  renderProfilePage,
};
