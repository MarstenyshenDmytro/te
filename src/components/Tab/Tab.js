import React from "react";

import Button from "../Button";

import "./tab.scss";

const Tab = ({ name, index, isActive, onClick }) => (
  <Button
    className={isActive ? "tab tab_active" : "tab"}
    label={name}
    onClick={() => onClick(index)}
  />
);

export default Tab;
