const {
  Subject,
  Price,
  Student,
  Response,
  Tutor,
  Ad,
} = require("../../models");

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

    // filter the ads for user
    const userAds = adsFromDb.filter(
      (ad) => ad.student.email === req.session.user.email
    );

    // GET subject data
    const subjectsFromDb = await Subject.findAll();

    // // get the subjects
    const subjects = subjectsFromDb.map((subject) => {
      return subject.get({ plain: true });
    });

    const defaultSubject = subjects[0];

    // get all ads
    const filteredAdsBySubject = adsFromDb.filter(
      (ad) =>
        ad.student.email !== req.session.user.email &&
        ad.subject.subjectName === defaultSubject.subjectName
    );

    return res.render("viewAds", {
      currentPage: "viewAds",
      userAds,
      subjects,
      filteredAdsBySubject,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to get ads | ${error.message}`);
    return res.status(500).json({ error: "Failed to get ads" });
  }
};

const renderSessionsPage = async (req, res) => {
  try {
    //declare a changeable variable

    let userResponses;
    let receivedResponses;

    const { userType } = req.session.user;

    if (userType === "student") {
      //find buddy from response
      const buddyResponses = await Response.findAll({
        where: {
          studentId: req.session.user.id,
        },
        include: [{ model: Student }, { model: Ad }],
      });

      const buddyResponsesData = buddyResponses.map((each) => {
        return each.get({ plain: true });
      });
      //find user who created the ad
      const getAd = await Ad.findAll({
        where: { studentId: req.session.user.id },
      });

      const adIds = getAd.map(({ dataValues }) => dataValues.id);

      const adResponses = await Response.findAll({
        where: {
          adId: adIds,
        },
        include: [{ model: Student }, { model: Tutor }],
      });
      const adResponseData = adResponses.map((each) => {
        return each.get({ plain: true });
      });

      userResponses = buddyResponsesData;
      receivedResponses = adResponseData;
    }

    if (userType === "tutor") {
      //find Tutor
      const tutorResponse = await Response.findAll({
        where: {
          tutorId: req.session.user.id,
          status: "completed",
        },
      });

      const tutorResponseData = tutorResponse.map(
        ({ dataValues }) => dataValues.adId
      );

      const userResponsesData = await Ad.findAll({
        where: { id: tutorResponseData },
        include: [{ model: Student }],
      });
      const userResponses = userResponsesData.map((each) => {
        return each.get({ plain: true });
      });
    }
    console.log(userResponses, receivedResponses);
    return res.render("sessions", {
      currentPage: "sessions",
      userResponses,
      receivedResponses,
      userType,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all responses| ${error.message}`);

    return res.status(500).json({ success: false });
  }
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
