const { Student } = require("../../models");

const getStudent = () => {};
const getStudentById = () => {};

const updateStudent = (req, res) => {
  const id = req.sessions.user.id;
};

const deleteStudent = () => {};

module.exports = {
  getStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
};
