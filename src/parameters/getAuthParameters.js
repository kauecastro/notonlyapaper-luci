class GetAuthParameters {
  constructor(req) {
    this.auth = {
      token: req.headers.authorization
    };
  }

  validate() {
    let errors = [];

    if (!this.auth.token) {
      errors.push("No token sent! Please, send a valid token. XD");
    }

    return errors;
  }

  getToken() {
    return this.auth.token;
  }
}

module.exports = GetAuthParameters;
