const { Subject, Price, Ad, Student } = require("../../models");

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
  // GET subject data
  const subjectsFromDb = await Subject.findAll();

  const subjects = subjectsFromDb.map((subject) => {
    return subject.get({ plain: true });
  });

  // GET price data
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

const renderViewAdsPage = async (req, res) => {
  try {
    // get all ads / get user ads
    const adsFromDb = await (
      await Ad.findAll({
        include: [{ model: Student }, { model: Subject }, { model: Price }],
      })
    ).map((ad) => {
      return ad.get({ plain: true });
    });

    console.log(adsFromDb);

    // filter the ads for user
    const userAds = adsFromDb.filter(
      (ad) => ad.student.email === req.session.user.email
    );

    // GET subject data
    const subjectsFromDb = await Subject.findAll();

    const subjects = subjectsFromDb.map((subject) => {
      return subject.get({ plain: true });
    });

    // filtered all the ads by subjects

    // const selectedAdsBySubject = () => {
    //   // get all ads
    //   const allAds = adsFromDb.filter(
    //     (ad) => ad.student.email !== req.session.user.email
    //   );

    //   // filter ads by subject
    // };

    return res.render("viewAds", { currentPage: "viewAds", userAds, subjects });
  } catch (error) {
    console.log(`[ERROR]: Failed to get ads | ${error.message}`);
    return res.status(500).json({ error: "Failed to get ads" });
  }
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
