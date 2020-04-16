class PostInstitutionParameters {
  constructor(req) {
    this.institution = {
      name: req.body.name,
      mainImage: req.body.mainImage
    };
  }

  validate() {
    let errors = [];

    if (!this.institution.name) {
      errors.push("name is required!");
    }

    if (!this.institution.mainImage) {
      errors.push("mainImage is required!");
    }

    return errors;
  }
}

module.exports = PostInstitutionParameters;
