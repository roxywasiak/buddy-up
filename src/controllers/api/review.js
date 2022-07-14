//require models
const { Review, Tutor, Student } = require("../../models");
//create contollers
//get all the reviews
const get = async (req, res) => {
  try {
    // get all books from DB
    const getAllReviews = await Book.findAll();

    // send the books in the response
    return res.json(books);
  } catch (error) {
    console.log(`[ERROR]: Failed to get books | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

//get review by id
const getReviewById = async (req, res) => {};

//create review
const createReview = async (req, res) => {};

//export your functions
module.exports = {
  getAllReviews,
  getReviewById,
  CreateReview,
};
