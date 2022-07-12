const path = require("path");

const renderHomePage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/index.html");
  return res.sendFile(filePath);
};
const renderTutorLoginPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/tutor-login.html");
  return res.sendFile(filePath);
};
const renderStudentLoginPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/student-login.html");
  return res.sendFile(filePath);
};
const renderCreatePage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/create-login.html");
  return res.sendFile(filePath);
};
const renderStudentDashboard = (req, res) => {
  const filePath = path.join(
    __dirname,
    "../../../public/student-dashboard.html"
  );
  return res.sendFile(filePath);
};
const renderTutorDashboard = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/tutor-dashboard.html");
  return res.sendFile(filePath);
};
const renderStudentLogoutPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/student-logout.html");
  return res.sendFile(filePath);
};
const renderTutorLogoutPage = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/tutor-logout.html");
  return res.sendFile(filePath);
};

module.exports = {
  renderHomePage,
  renderTutorLoginPage,
  renderStudentLoginPage,
  renderCreatePage,
  renderStudentDashboard,
  renderTutorDashboard,
  renderStudentLogoutPage,
  renderTutorLogoutPage,
};
