import React from "react";

import "./header.scss";

const Header = ({ currentPage }) => {
  return (
    <header className="header container">
      <p className="header__current-page-info">{currentPage}</p>
    </header>
  );
};

export default Header;
