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

  const priceFromDb = await Price.findAll();

  const prices = priceFromDb.map((price) => {
    return price.get({ plain: true });
  });

  return res.render("createAds", {
    currentPage: "createAds",
    subjects,
    prices,
  });
};

const renderViewAdsPage = (req, res) => {
  // get user ads (where user id === to user id) - user ads
  // get all ads and filter - filtered ads
  // use handlebars to render cards
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
