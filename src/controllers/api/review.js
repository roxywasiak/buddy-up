//require models
const { Review } = require("../../models");
//create controllers

//get all the reviews
const getReviews = async (req, res) => {
  try {
    // get allReviews from DB
    const getAllReviews = await Review.findAll();

    // send the reviews in the response
    return res.json(getAllReviews);
  } catch (error) {
    console.log(`[ERROR]: Failed to get books | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

//get review by id
const reviewById = async (req, res) => {
  try {
    const getReviewById = await Review.findByPk(req.params.id);
    if (getReviewById) {
      return res.json(getReviewById);
    }
    return res
      .status(404)
      .json({ success: false, message: "Review does not exist" });
  } catch (error) {
    console.log(`[ERROR]: Failed to get review | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

//create review
const newReview = async (req, res) => {
  try {
    // get new review data from request body
    const review = req.body;
    // insert review into the DB
    const createReview = await Review.create(review);

    // send response
    return res.json(reviewById);
  } catch (error) {
    console.log(`[ERROR]: Failed to create review | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

//export your functions
module.exports = {
  getReviews,
  reviewById,
  newReview,
};
