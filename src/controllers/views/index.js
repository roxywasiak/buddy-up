const { Subject, Price } = require("../../models");

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

const renderCreateAdsPage = async (req, res) => {
  const subjectsFromDb = await Subject.findAll();

  const subjects = subjectsFromDb.map((subject) => {
    return subject.get({ plain: true });
  });

  // const budgetFromDb = await Price.findAll();

  // console.log(budgetFromDb);

  // const budgets = budgetFromDb.map((budget) => {
  //   return budget.get({ plain: true });
  // });

  return res.render("createAds", { currentPage: "createAds", subjects });
};

renderCreateAdsPage();

const renderViewAdsPage = (req, res) => {
  return res.render("viewAds", { currentPage: "viewAds" });
};

const renderSessionsPage = (req, res) => {
  return res.render("sessions", { currentPage: "sessions" });
};

const renderCompleteProfilePage = async (req, res) => {
  const subjectsFromDb = await Subject.findAll();

  const subjects = subjectsFromDb.map((subject) => {
    return subject.get({ plain: true });
  });

  return res.render("completeProfile", {
    currentPage: "completeProfile",
    subjects,
  });
};

module.exports = {
  renderHomePage,
  renderDashboard,
  renderAuthPage,
  renderCreateAdsPage,
  renderViewAdsPage,
  renderSessionsPage,
  renderCompleteProfilePage,
};
