const { Ad } = require("../../models");
//post
const createAd = async (req, res) => {
  try {
    const { studentId, isTutor, priceId, description, subjectId } = req.body;

    if (isTutor === false && !priceId) {
      const createdAd = Ad.create({
        studentId,
        isTutor,
        description,
        subjectId,
      });
      return res.json({ success: true, createdAd });
    }

    if (isTutor === true) {
      const createdAd = Ad.create({
        studentId,
        isTutor,
        priceId,
        description,
        subjectId,
      });
      return res.json({ success: true, createdAd });
    }
    if (isTutor === false && priceId) {
      return res.status(500).json({ success: false });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create Ad| ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const cleanupPayload = (payload) => {
  const editableFields = ["priceId", "description", "subjectId"];

  // go through payload and check if each field exists in editableFields

  return Object.entries(payload).reduce((acc, [key, value]) => {
    if (editableFields.includes(key)) {
      return {
        ...acc,
        [key]: value,
      };
    }

    return acc;
  }, {});
};
//put
const updateAd = async (req, res) => {
  try {
    const payload = cleanupPayload(req.body);

    const { studentId } = req.body;
    if (!studentId) {
      return res.status(500).json({ success: false });
    }

    const updatedAd = await Ad.update(
      payload,
      {
        where: { id: req.params.id },
      },
      { plain: true }
    );
    return res.json({ success: true, updatedAd });
  } catch (error) {
    console.log(`[ERROR]: Failed to update Ad| ${error.message}`);
    return res.status(500).json({ success: false });
  }
};

const deleteAd = async (req, res) => {
  try {
    const { id } = req.params;
    const adExist = await Ad.findByPk(id);

    // delete ad
    if (adExist) {
      await Ad.destroy({
        where: {
          id,
        },
      });
      return res.status(200).json({ message: "Successfully deleted ad" });
    }
    return res.status(404).json({ error: "Failed to delete ad" });
  } catch (error) {
    // catch error and return status 500
    console.log(`[ERROR]: Failed to delete ad | ${error.message}`);
    return res.status(500).json({ error: "Failed to delete ad" });
  }
};

const getAdById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Ad.findByPk(id);

    if (!data) {
      return res.status(404).json({ success: false });
    }

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all ads | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const getAdsbySubjectAndType = async (req, res) => {
  try {
    const { isTutor, subjectId } = req.body;

    if (!isTutor && subjectId) {
      const selectedAds = await Ad.findAll({
        where: {
          isTutor: !isTutor,
          subjectId,
        },
      });
      return res.json({ success: true, selectedAds });
    }
    if (!isTutor) {
      const selectedAds = await Ad.findAll({
        where: {
          isTutor: !isTutor,
        },
      });
      return res.json({ success: true, selectedAds });
    }
    if (isTutor && subjectId) {
      const selectedAds = await Ad.findAll({
        where: {
          isTutor: isTutor,
          subjectId,
        },
      });
      return res.json({ success: true, selectedAds });
    }
    if (isTutor) {
      const selectedAds = await Ad.findAll({
        where: {
          isTutor: isTutor,
        },
      });
      return res.json({ success: true, selectedAds });
    }
    if (subjectId) {
      const selectedAds = await Ad.findAll({
        where: {
          subjectId,
        },
      });
      return res.json({ success: true, selectedAds });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to get ads | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};
const getAllAds = async (req, res) => {
  try {
    const data = await Ad.findAll({});

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all ads | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

module.exports = {
  createAd,
  updateAd,
  deleteAd,
  getAdById,
  getAdsbySubjectAndType,
  getAllAds,
};
