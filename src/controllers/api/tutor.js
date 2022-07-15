const { Tutor } = require("../../models");

const getAllTutors = async (req, res) => {
  try {
    const data = await Tutor.findAll({});

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all Tutors | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};
const getTutorById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Tutor.findByPk(id);

    if (!data) {
      return res.status(404).json({ success: false });
    }

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all Tutors | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const updateTutor = async (req, res) => {
  try {
    const {
      socialMedia,
      calendlyLink,
      priceId,
      location,
      isRemote,
      lat,
      long,
    } = req.body;
    const id = req.sessions.user.id;
    const data = await Tutor.findByPk(id);
    if (!data) {
      return res.status(404).json({ success: false });
    }
    await Tutor.update({
      socialMedia,
      calendlyLink,
      priceId,
      location,
      isRemote,
      lat,
      long,
    });
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create Tutor | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const deleteTutor = async (req, res) => {
  try {
    // delete Tutor
    await Tutor.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.json({ message: "Successfully deleted Tutor" });
  } catch (error) {
    // catch error and return status 500
    console.log(`[ERROR]: Failed to delete Tutor | ${error.message}`);
    return res.status(500).json({ error: "Failed to delete Tutor" });
  }
};

module.exports = {
  getAllTutors,
  getTutorById,
  updateTutor,
  deleteTutor,
};
