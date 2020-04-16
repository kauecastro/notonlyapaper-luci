const reviewsCollection = require("../models/reviews-model");
const GetReviewParameters = require("../parameters/getReviewParameters");
const PutReviewParameters = require("../parameters/putReviewParameters");
const PostReviewParameters = require("../parameters/postReviewParameters");
const DeleteReviewParameters = require("../parameters/deleteReviewParameters");

const getReview = (req, res) => {
  const parameters = new GetReviewParameters(req);
  const errors = parameters.validate(req);

  if (errors.length > 0) {
    return res.status(400).json({
      status: false,
      message: errors
    });
  }

  const filters = parameters.getFilter();

  reviewsCollection
    .find(filters)
    .then(review =>
      res.status(200).json({ status: true, message: "Success!", data: review })
    )
    .catch(e => res.status(500).json({ status: false, message: e }));
};

const deleteOne = (req, res) => {
  const parameters = new DeleteReviewParameters(req);
  const errors = parameters.validate(req);

  if (errors.length > 0) {
    return res.status(400).json({
      status: false,
      message: errors
    });
  }

  const _id = parameters.getId();

  reviewsCollection
    .deleteOne({ _id })
    .then(review =>
      res.status(200).json({ status: true, message: "Success!", data: review })
    )
    .catch(e => res.status(500).json({ status: false, message: e }));
};

const updateOne = (req, res) => {
  const parameters = new PutReviewParameters(req);
  const errors = parameters.validate(req);

  if (errors.length > 0) {
    return res.status(400).json({
      status: false,
      message: errors
    });
  }

  const filters = parameters.getFilter();
  const _id = parameters.getId();

  reviewsCollection
    .updateOne({ _id }, filters)
    .then(review =>
      res.status(200).json({ status: true, message: "Success!", data: review })
    )
    .catch(e => res.status(500).json({ status: false, message: e }));
};

const createReview = async (req, res) => {
  const parameters = new PostReviewParameters(req);
  const errors = parameters.validate(req);

  if (errors.length > 0) {
    return res.status(400).json({
      status: false,
      message: errors
    });
  }

  try {
    const hasReview = await reviewsCollection.find({
      name: parameters.review.name
    });

    if (!hasReview || hasReview.length) {
      return res.status(422).json({
        status: false,
        message: `The review ${parameters.review.name} already exists!`
      });
    }

    const result = await reviewsCollection.create(parameters.review);

    return res
      .status(200)
      .json({ status: true, message: "Success!", data: result });
  } catch (e) {
    return res.status(500).json({ status: false, message: e });
  }
};

module.exports = { createReview, updateOne, deleteOne, getReview };
