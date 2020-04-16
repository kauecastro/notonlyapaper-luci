const userCollection = require("../models/user-model");
const PostUserParameters = require("../parameters/postUserParameters");

const createUser = async (req, res) => {
  const parameters = new PostUserParameters(req);
  const errors = parameters.validate(req);

  if (errors.length > 0) {
    return res.status(400).json({
      status: false,
      message: errors
    });
  }

  const user = parameters.getUser();

  try {
    const hasUser = await userCollection.find({
      $or: [{ username: user.username }, { email: user.email }]
    });

    if (!hasUser || hasUser.length) {
      return res
        .status(422)
        .json({ status: false, message: "The user already exists!" });
    }

    const result = await userCollection.create(user);

    return res
      .status(200)
      .json({ status: true, message: "Success!", data: result });
  } catch (e) {
    return res.status(500).json({ status: false, message: e });
  }
};

module.exports = {
  createUser
};
