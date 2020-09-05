import React from "react";

import "./checkbox.scss";

const Checkbox = ({ name, value, onClick, isChecked }) => {
  const handleChange = () => {
    onClick(!isChecked, value);
  };

  return (
    <input
      name={name}
      value={value}
      type="checkbox"
      checked={isChecked}
      onChange={handleChange}
    />
  );
};

export default Checkbox;
