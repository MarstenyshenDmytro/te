export const validators = {
  emailRegularExpresion: (value) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value),
  required: "This field is required",
};
