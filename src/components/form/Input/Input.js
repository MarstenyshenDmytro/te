import React from "react";

import "./input.scss";

const Input = ({
  name,
  placeholder,
  type,
  handleControl,
  register,
  isFocus,
  validator,
}) => (
  <input
    className="input txt--18"
    name={name}
    type={type || "text"}
    onFocus={handleControl}
    onBlur={handleControl}
    ref={register(validator)}
    placeholder={`${!isFocus ? placeholder : ""} `}
  />
);

export default Input;
