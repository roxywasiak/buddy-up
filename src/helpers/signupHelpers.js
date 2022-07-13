const getTutorPayload = (payload) => {
  const { firstName, lastName, email, password, socialMedia, calendlyLink } =
    payload;

  return { firstName, lastName, email, password, socialMedia, calendlyLink };
};

const getStudentPayload = (payload) => {
  const { firstName, lastName, email, password } = payload;

  return { firstName, lastName, email, password };
};

module.exports = {
  getTutorPayload,
  getStudentPayload,
};
