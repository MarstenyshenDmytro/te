import React from "react";

import Button from "../Button";
import User from "../../assets/img/user.jpg";

import "./header.scss";

const Header = ({ currentPage, onClick }) => {
  return (
    <header className="header container">
      <div className="header__user">
        <div className="header__avatar">
          <img src={User} alt="user" />
        </div>
        <div className="header__logout-button-wrapper">
          <Button
            className="header__logout-button"
            label="Logout"
            onClick={onClick}
          />
        </div>
      </div>
      <p className="header__current-page-info">{currentPage}</p>
    </header>
  );
};

export default Header;
