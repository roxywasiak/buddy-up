const dateFns = require("date-fns");

const isEqualTo = (data, equalToString) => {
  return data === equalToString;
};

const dateFormat = (date) => {
  const formattedDate = dateFns.format(new Date(date), "do MMMM, yyyy");
  return `Created: ${formattedDate}`;
};

const getCurrentDate = (value) => {
  const d = new Date();
  const formattedDate = dateFns.format(new Date(d), "do MMMM, yyyy");
  return formattedDate;
};

module.exports = {
  isEqualTo,
  dateFormat,
  getCurrentDate,
};
