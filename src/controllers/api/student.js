const { Student } = require("../../models");

const getAllStudents = async (req, res) => {
  try {
    const data = await Student.findAll({});

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all students | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};
const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Student.findByPk(id);

    if (!data) {
      return res.status(404).json({ success: false });
    }

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all students | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { priceId, location, isRemote, lat, long } = req.body;
    const id = req.sessions.user.id;
    const data = await Student.findByPk(id);
    if (!data) {
      return res.status(404).json({ success: false });
    }
    await Student.update({ priceId, location, isRemote, lat, long });
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create student | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const deleteStudent = async (req, res) => {
  try {
    // delete Student
    await Student.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.json({ message: "Successfully deleted Student" });
  } catch (error) {
    // catch error and return status 500
    console.log(`[ERROR]: Failed to delete Student | ${error.message}`);
    return res.status(500).json({ error: "Failed to delete Student" });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
