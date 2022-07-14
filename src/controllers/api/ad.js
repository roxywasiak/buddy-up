const { Student, Tutor, Ad } = require("../../models");

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

const deleteAd = async () => {};

const getAdbyId = async () => {};

const getAdsbyCatergory = async () => {};

module.exports = {
  createAd,
  updateAd,
};
