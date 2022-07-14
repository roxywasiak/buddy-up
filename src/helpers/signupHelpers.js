const get = (payload) => {
  const { firstName, lastName, email, password } = payload;

  return { firstName, lastName, email, password };
};

const getStudentPayload = (payload) => {
  const { firstName, lastName, email, password } = payload;

  return { firstName, lastName, email, password };
};

const isEqualTo = (data, equalToString) => {
  return data === equalToString;
};

module.exports = {
  getTutorPayload,
  getStudentPayload,
  isEqualTo,
};
