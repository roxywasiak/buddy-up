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
    console.log(`[ERROR]: Failed to get tutor | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const updateTutor = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      socialMedia,
      calendlyLink,
      priceAmount,
      priceId,
      location,
      isRemote,
      lat,
      long,
      isProfileComplete,
    } = req.body;
    const id = req.session.user.id;

    //const id = 12;
    const data = await Tutor.findByPk(id);
    if (!data) {
      return res.status(404).json({ success: false });
    }
    await Tutor.update(
      {
        firstName,
        lastName,
        email,
        socialMedia,
        calendlyLink,
        priceAmount,
        priceId,
        location,
        isRemote,
        lat,
        long,
        isProfileComplete,
      },
      { where: { id: id } }
    );
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to update Tutor | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const deleteTutor = async (req, res) => {
  try {
    // delete Tutor
    const { id } = req.params;
    const tutorExist = await Tutor.findByPk(id);

    // delete tutor
    if (tutorExist) {
      await Tutor.destroy({
        where: {
          id,
        },
      });
      return res.status(200).json({ message: "Successfully deleted tutor" });
    }
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
