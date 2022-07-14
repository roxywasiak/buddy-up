const path = require("path");

const renderHomePage = (req, res) => {
  return res.render("home", { currentPage: "home" });
};

const renderStudentDashboard = (req, res) => {
  return res.render("studentDashboard", { currentPage: "studentDashboard" });
};
const renderTutorDashboard = (req, res) => {
  return res.render("tutorDashboard", { currentPage: "tutorDashboard" });
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

module.exports = {
  renderHomePage,
  renderStudentDashboard,
  renderTutorDashboard,
  renderAuthPage,
  renderCreateAdsPage,
  renderViewAdsPage,
  renderSessionsPage,
};
