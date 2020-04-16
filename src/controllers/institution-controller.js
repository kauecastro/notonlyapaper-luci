const institutionsCollection = require("../models/institutions-model");
const GetInstitutionParameters = require("../parameters/getInstitutionParameters");
const PutInstitutionParameters = require("../parameters/putInstitutionParameters");
const PostInstitutionParameters = require("../parameters/postInstitutionParameters");
const DeleteInstitutionParameters = require("../parameters/deleteInstitutionParameters");

const getInstitution = (req, res) => {
  const parameters = new GetInstitutionParameters(req);
  const errors = parameters.validate(req);

  if (errors.length > 0) {
    return res.status(400).json({
      status: false,
      message: errors
    });
  }

  const filters = parameters.getFilter();

  institutionsCollection
    .find(filters)
    .then(institution =>
      res
        .status(200)
        .json({ status: true, message: "Success!", data: institution })
    )
    .catch(e => res.status(500).json({ status: false, message: e }));
};

const deleteOne = (req, res) => {
  const parameters = new DeleteInstitutionParameters(req);
  const errors = parameters.validate(req);

  if (errors.length > 0) {
    return res.status(400).json({
      status: false,
      message: errors
    });
  }

  const _id = parameters.getId();

  institutionsCollection
    .deleteOne({ _id })
    .then(institution =>
      res
        .status(200)
        .json({ status: true, message: "Success!", data: institution })
    )
    .catch(e => res.status(500).json({ status: false, message: e }));
};

const updateOne = (req, res) => {
  const parameters = new PutInstitutionParameters(req);
  const errors = parameters.validate(req);

  if (errors.length > 0) {
    return res.status(400).json({
      status: false,
      message: errors
    });
  }

  const filters = parameters.getFilter();
  const _id = parameters.getId();

  institutionsCollection
    .updateOne({ _id }, filters)
    .then(institution =>
      res
        .status(200)
        .json({ status: true, message: "Success!", data: institution })
    )
    .catch(e => res.status(500).json({ status: false, message: e }));
};

const createInstitution = async (req, res) => {
  const parameters = new PostInstitutionParameters(req);
  const errors = parameters.validate(req);

  if (errors.length > 0) {
    return res.status(400).json({
      status: false,
      message: errors
    });
  }

  try {
    const hasInstitution = await institutionsCollection.find({
      name: parameters.institution.name
    });

    if (!hasInstitution || hasInstitution.length) {
      return res.status(422).json({
        status: false,
        message: `The institution ${parameters.institution.name} already exists!`
      });
    }

    const result = await institutionsCollection.create(parameters.institution);

    return res
      .status(200)
      .json({ status: true, message: "Success!", data: result });
  } catch (e) {
    return res.status(500).json({ status: false, message: e });
  }
};

module.exports = { createInstitution, updateOne, deleteOne, getInstitution };
