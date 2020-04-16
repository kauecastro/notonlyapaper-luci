class PutReviewParameters {
  constructor(req) {
    this.review = {
      _id: req.params.id,
      userId: req.body.userId,
      institutionId: req.body.institutionId,
      pros: req.body.pros,
      cons: req.body.cons,
      rate: req.body.rate,
      isRecomended: req.body.isRecomended
    };
  }

  validate() {
    let errors = [];

    if (!this.review._id) {
      errors.push(
        "Invalid Id. You must identify the review that you want to update with the Id."
      );
    }

    return errors;
  }

  getFilter() {
    let filter = {};

    if (this.review.userId) {
      filter.userId = this.review.userId;
    }

    if (this.review.institutionId) {
      filter.institutionId = this.review.institutionId;
    }

    if (this.review.pros) {
      filter.pros = this.review.pros;
    }

    if (this.review.cons) {
      filter.cons = this.review.cons;
    }

    if (this.review.rate) {
      filter.rate = this.review.rate;
    }

    if (this.review.isRecomended) {
      filter.isRecomended = this.review.isRecomended;
    }

    return filter;
  }

  getId() {
    return this.review._id;
  }
}

module.exports = PutReviewParameters;
