import React from "react";

import "./button.scss";

const Button = ({ className, label, onClick, type }) => (
  <button
    className={`button ${className}`}
    onClick={onClick ? onClick : () => {}}
    type={type || "button"}
  >
    {label}
  </button>
);

export default Button;
