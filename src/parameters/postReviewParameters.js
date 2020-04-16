class PostReviewParameters {
  constructor(req) {
    this.review = {
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

    if (!this.review.userId) {
      errors.push("userId is required!");
    }

    if (!this.review.institutionId) {
      errors.push("institutionId is required!");
    }

    if (!this.review.pros) {
      errors.push("pros is required!");
    }

    if (!this.review.cons) {
      errors.push("cons is required!");
    }

    if (!this.review.rate) {
      errors.push("rate is required!");
    }

    if (!this.review.isRecomended) {
      errors.push("isRecomended is required!");
    }

    return errors;
  }
}

module.exports = PostReviewParameters;
