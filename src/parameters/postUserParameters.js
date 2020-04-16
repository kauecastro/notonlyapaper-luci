class PostUserParameters {
  constructor(req) {
    this.user = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    };
  }

  validate() {
    let errors = [];

    if (!this.user.username) {
      errors.push("username is required!");
    }

    if (!this.user.email) {
      errors.push("email is required!");
    }

    if (!this.user.password) {
      errors.push("password is required!");
    }

    return errors;
  }

  getUser() {
    let user = {};

    if (this.user.username) {
      user.username = this.user.username;
    }

    if (this.user.password) {
      user.password = this.user.password;
    }

    if (this.user.email) {
      user.email = this.user.email;
    }

    return user;
  }
}

module.exports = PostUserParameters;
