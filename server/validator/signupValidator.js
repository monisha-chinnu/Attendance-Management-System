const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function signupValidator(data) {
  let regex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
  let errors = {};

  // convert empty fileds to an empty string so we can use validator

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //name checks

  if (validator.isEmpty(data.firstName)) {
    errors.name = "Firstname field is required";
  }
  if (validator.isEmpty(data.lastName)) {
    errors.name = "Lastname field is required";
  }

  //email checks

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Format Email required";
  }

  //password checks

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  } else if (!regex.test(data.password)) {
    console.log("Password should have")
    errors.password =
    "Password should have 1 lowercase letter, 1 uppercase letter, 1 number, and be atleast 8 characters long";
  }

  console.log(isEmpty(errors))
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
