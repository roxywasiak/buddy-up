const { Student, Tutor, Response } = require("../../models");

const createResponse = async (req, res) => {
  try {
    // create new add
    const response = req.body;

    // create new ad
    const newResponse = await Response.create(response);

    // send response
    return res.json(newResponse);
  } catch (error) {
    console.log(`[ERROR]: Failed to create response | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const updateResponse = async (req, res) => {
  try {
    // update response
    const newResponse = req.body;

    // update new response to db
    const updatedResponse = await Book.update(newResponse);

    // send response
    return res.json(updatedResponse);
  } catch (error) {
    console.log(`[ERROR]: Failed to create book | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createResponse,
  updateResponse,
};

// student post a ad
// view all ads - button on front

// create response by id
// get respone by id
