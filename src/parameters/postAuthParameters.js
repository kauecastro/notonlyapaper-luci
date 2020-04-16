class PostAuthParameters {
  constructor(req) {
    this.auth = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    };
  }

  validate() {
    let errors = [];

    if (!this.auth.username && !this.auth.email) {
      errors.push(
        "Username and email is empty! Please, inform a valid username or email to login."
      );
    }

    if (!this.auth.password) {
      errors.push("Password is empty!");
    }

    return errors;
  }

  getFilter() {
    let filter = {};

    if (this.auth.username) {
      filter.username = this.auth.username;
    }

    if (this.auth.password) {
      filter.password = this.auth.password;
    }

    if (this.auth.email) {
      filter.email = this.auth.email;
    }

    return filter;
  }
}

module.exports = PostAuthParameters;
