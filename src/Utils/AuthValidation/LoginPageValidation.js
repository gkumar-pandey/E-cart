export const isEmailPasswordValid = (email, password) => {
  let notValidMsg = {
    valid: true,
    status: "",
    msg: ""
  };
  if (email !== "" && notValidMsg.valid) {
    notValidMsg.valid = true;
  } else {
    notValidMsg = {
      valid: false,
      status: "error",
      msg: "Fill All inputs"
    };
    return notValidMsg;
  }

  if (password !== "" && notValidMsg.valid) {
    notValidMsg.valid = true;
  } else {
    notValidMsg = {
      valid: false,
      status: "error",
      msg: "Fill all inputs"
    };
    return notValidMsg;
  }

  return notValidMsg;
};
