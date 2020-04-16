class GetInstitutionParameters {
  constructor(req) {
    this.filters = {
      _id: req.params.id,
      name: req.query.email
    };
  }

  validate() {
    let errors = [];

    return errors;
  }

  getFilter() {
    let filter = {};

    if (this.filters._id) {
      filter._id = this.filters._id;
    }

    if (this.filters.name) {
      filter.email = this.filters.email;
    }

    return filter;
  }
}

module.exports = GetInstitutionParameters;
