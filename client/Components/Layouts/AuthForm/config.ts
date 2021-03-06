export const emailProps = {
  required: "This is required",
  pattern: {
    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message: "Invalid email address",
  },
};

export const nameProps = {
  required: "This is required",
  minLength: { value: 4, message: "Min length is 4" },
  maxLength: {
    value: 15,
    message: "Max length is 15",
  },
};

export const passwordProps = {
  required: "This is required",
  pattern: {
    value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,20}$/,
    message:
      "7 to 20 characters which contain at least one numeric digit and a special character",
  },
};
