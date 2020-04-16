const institutionsCollection = require("../models/institutions-model");
const reviewsCollection = require("../models/reviews-model");

const getTopInstitutions = async (req, res) => {
  const institutions = await institutionsCollection.find();

  const institutionIds = [];

  institutions.map((institution) => {
    institutionIds.push(institution._id);
  });

  const reviews = await reviewsCollection.find({
    institutionId: { $in: institutionIds },
  });

  const ratesPerInstitutionId = {};

  reviews.map((review) => {
    if (ratesPerInstitutionId[review.id]) {
      ratesPerInstitutionId[review.institutionId].push(review.rate);
    } else {
      ratesPerInstitutionId[review.id] = [review.rate];
    }
  });

  const ranking = [];

  institutions.map((institution) => {
    const institutionId = institution.id;
    let institutionResponse = {
      id: institutionId,
      name: institution.name,
      mainImage: institution.mainImage,
    };

    const rates = ratesPerInstitutionId[institutionId];

    if (!rates) {
      return;
    }

    let sum = rates.reduce((previous, current) => (current += previous));
    let avg = sum / rates.length;

    institutionResponse.rate = avg;

    ranking.push(institutionResponse);
  });

  return res
    .status(200)
    .json({ status: true, message: "Success!", data: ranking });
};

module.exports = { getTopInstitutions };
