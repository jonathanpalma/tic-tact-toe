const UserModel = require('../models/userModel');

const hasUserExists = async id => {
  let response = false;
  await UserModel.count({ id: id.toLowerCase() }, (err, count) => {
    if (count > 0) {
      response = true;
    }
  });
  return response;
};

module.exports = hasUserExists;
