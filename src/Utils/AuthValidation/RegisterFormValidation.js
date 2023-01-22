//TODO->  userName Validation function
//* user name must have atleast 3 character   *//

const checkUserName = (username) => {
  const validMsg = {
    isValid: true,
    status: "",
    msg: ""
  };

  if (username === "") {
    validMsg.isValid = false;
    validMsg.status = "error";
    validMsg.msg = "Please fill your username!🙄";
    return validMsg;
  } else {
    validMsg.isValid = true;
  }

  if (!(username.length >= 3)) {
    validMsg.isValid = false;
    validMsg.status = "error";
    validMsg.msg = "User name must have atleast 3 character🤕";
    return validMsg;
  } else {
    validMsg.isValid = true;
  }

  return validMsg;
};

//Todo - check email is valid
//* email should not empty and a valid email */

const checkEmail = (email) => {
  const validMsg = {
    isValid: true,
    status: "",
    msg: ""
  };

  const regEx =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (email === "") {
    validMsg.isValid = false;
    validMsg.status = "error";
    validMsg.msg = "Please enter your email";
    return validMsg;
  }

  if (!regEx.test(email)) {
    validMsg.isValid = false;
    validMsg.status = "warning";
    validMsg.msg = "Enter a valid email";

    return validMsg;
  }

  return validMsg;
};

//todo -> check password and confirm password

const checkPassword = (password) => {
  const validMsg = {
    isValid: true,
    status: "",
    msg: ""
  };

  if (password === "") {
    validMsg.isValid = false;
    validMsg.status = "error";
    validMsg.msg = "please fill your password";
    return validMsg;
  } else {
    validMsg.isValid = true;
  }

  if (!(password.length >= 6)) {
    validMsg.isValid = false;
    validMsg.status = "error";
    validMsg.msg = "Password should have atleast 6 character";
    return validMsg;
  } else {
    validMsg.isValid = true;
  }

  return validMsg;
};

const checkConfirmPassword = (pass, confirmPass) => {
  const validMsg = {
    isValid: true,
    status: "",
    msg: ""
  };

  if (confirmPass === "") {
    validMsg.isValid = false;
    validMsg.status = "error";
    validMsg.msg = "Please confirm your password!";
    return validMsg;
  }

  if (confirmPass === pass && confirmPass !== "" && pass !== "") {
    validMsg.isValid = true;
  } else {
    validMsg.isValid = false;
    validMsg.status = "error";
    validMsg.msg = "password and confirm password not match";
    return validMsg;
  }

  return validMsg;
};

export { checkUserName, checkEmail, checkPassword, checkConfirmPassword };
