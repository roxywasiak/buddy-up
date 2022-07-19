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
    console.log(`[ERROR]: Failed to get student | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { priceId, location, isRemote, lat, long } = req.body;
    const id = req.session.user.id;
    const data = await Student.findByPk(id);
    if (!data) {
      return res.status(404).json({ success: false });
    }
    await Student.update(
      { priceId, location, isRemote, lat, long },
      { where: { id: id } }
    );
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to update student | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const studentExist = await Student.findByPk(id);

    // delete student
    if (studentExist) {
      await Student.destroy({
        where: {
          id,
        },
      });
      return res.status(200).json({ message: "Successfully deleted student" });
    }
    return res.status(404).json({ error: "Failed to delete student" });
  } catch (error) {
    // catch error and return status 500
    console.log(`[ERROR]: Failed to delete student | ${error.message}`);
    return res.status(500).json({ error: "Failed to delete student" });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
