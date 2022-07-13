const get = (payload) => {
  const { firstName, lastName, email, password } = payload;

  return { firstName, lastName, email, password };
};

const getStudentPayload = (payload) => {
  const { firstName, lastName, email, password } = payload;

  return { firstName, lastName, email, password };
};

module.exports = {
  getTutorPayload,
  getStudentPayload,
};
