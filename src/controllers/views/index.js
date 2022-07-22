const {
  Subject,
  Price,
  Student,
  Response,
  Tutor,
  Ad,
  Messages,
} = require("../../models");

const renderHomePage = (req, res) => {
  return res.render("home", { currentPage: "home" });
};

const renderDashboard = async (req, res) => {
  const { user } = req.session;
  if (user.userType === "tutor") {
    const userDetails = (
      await Tutor.findAll({ where: { id: user.id }, raw: true })
    )[0];
    return res.render("dashboard", { currentPage: "dashboard", userDetails });
  } else if (user.userType === "student") {
    const userDetails = (
      await Student.findAll({ where: { id: user.id }, raw: true })
    )[0];
    return res.render("dashboard", { currentPage: "dashboard", userDetails });
  }
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
        include: [
          { model: Student },
          { model: Ad, include: [{ model: Subject }, { model: Student }] },
        ],
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
        include: [
          { model: Student },
          { model: Tutor },
          { model: Ad, include: [{ model: Subject }] },
        ],
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
        include: [{ model: Student }, { model: Subject }],
      });
      userResponses = userResponsesData.map((each) => {
        return each.get({ plain: true });
      });
    }
    console.log(userResponses);
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

const renderMessagesPage = async (req, res) => {
  const { user } = req.session;
  const { id: responseId } = req.params;

  const allMessageContent = await Messages.findAll({
    where: { responseId },
    raw: true,
  });

  allMessageContent.sort((a, b) => a.createdAt - b.createdAt);

  console.log(user);

  return res.render("messages", {
    currentPage: "messages",
    allMessageContent,
    user,
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
  renderProfilePage,
  renderMessagesPage,
};
