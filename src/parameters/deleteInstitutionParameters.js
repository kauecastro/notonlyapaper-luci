class DeleteRequestsParameters {
  constructor(req) {
    this.parameters = {
      _id: req.params.id
    };
  }

  validate() {
    let response = [];

    if (!this.parameters._id) {
      response.push(
        "Invalid Id. You must identify the item that you want to delete with the Id."
      );
    }

    return response;
  }

  getId() {
    return this.parameters._id;
  }
}

module.exports = DeleteRequestsParameters;
