class GetReviewParameters {
  constructor(req) {
    this.review = {
      _id: req.params.id,
      userId: req.query.userId,
      institutionId: req.query.institutionId,
      rate: req.query.rate,
      isRecomended: req.query.isRecomended
    };
  }

  validate() {
    let errors = [];

    return errors;
  }

  getFilter() {
    let filter = {};

    if (this.review._id) {
      filter._id = this.review._id;
    }

    if (this.review.userId) {
      filter.userId = this.review.userId;
    }

    if (this.review.institutionId) {
      filter.institutionId = this.review.institutionId;
    }

    if (this.review.rate) {
      filter.rate = this.review.rate;
    }

    if (this.review.isRecomended) {
      filter.isRecomended = this.review.isRecomended;
    }

    return filter;
  }
}

module.exports = GetReviewParameters;
