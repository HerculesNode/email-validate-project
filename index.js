const validator = require("validator");

function validateEmail(email) {
  return validator.isEmail(email);
}

module.exports = validateEmail;
