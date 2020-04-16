class PutInstitutionParameters {
  constructor(req) {
    this.institution = {
      _id: req.params.id,
      name: req.body.name,
      mainImage: req.body.mainImage
    };
  }

  validate() {
    let errors = [];

    if (!this.institution._id) {
      errors.push(
        "Invalid Id. You must identify the institution that you want to update with the Id."
      );
    }

    return errors;
  }

  getFilter() {
    let filter = {};

    if (this.institution.name) {
      filter.name = this.institution.name;
    }

    if (this.institution.mainImage) {
      filter.mainImage = this.institution.mainImage;
    }

    return filter;
  }

  getId() {
    return this.institution._id;
  }
}

module.exports = PutInstitutionParameters;
