const path = require("path");

const renderHomePage = (req, res) => {
  return res.send("auth");
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

module.exports = {
  renderHomePage,
  renderStudentDashboard,
  renderTutorDashboard,
  renderAuthPage,
};
