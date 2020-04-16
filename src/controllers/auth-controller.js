const jwt = require("jsonwebtoken");
const userCollection = require("../models/user-model");
const PostAuthParameters = require("../parameters/postAuthParameters");
const GetAuthParameters = require("../parameters/getAuthParameters");

const login = async (req, res, next) => {
  const parameters = new PostAuthParameters(req);
  const errors = parameters.validate();

  if (errors.length > 0) {
    return res.status(400).json({
      status: false,
      message: errors
    });
  }

  const filters = parameters.getFilter();

  let user = {};
  try {
    user = await userCollection.find(filters);
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error,
      code: "INTERNAL_ERROR"
    });
  }

  if (!user.length) {
    return res.status(403).json({
      status: false,
      message: "Incorrect credentials!",
      code: "INCORRECT_CREDENTIALS"
    });
  }

  const jwtObj = {
    username: user.name
  };

  const options = {
    expiresIn: "10h"
  };

  const token = jwt.sign(jwtObj, "shhhhhh", options);

  return res
    .status(200)
    .json({ status: true, message: "Success!", data: token });
};

const verify = async (req, res, next) => {
  const parameters = new GetAuthParameters(req);
  const errors = parameters.validate();

  if (errors.length > 0) {
    return res.status(403).json({
      status: false,
      message: errors
    });
  }

  let token = parameters.getToken();
  token = token.replace("Bearer ", "");

  try {
    await jwt.verify(token, "shhhhhh");
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Token is not valid.",
      code: "INVALID_TOKEN"
    });
  }

  return res.status(200).json({ status: true, message: "Token is valid." });
};

module.exports = { login, verify };
