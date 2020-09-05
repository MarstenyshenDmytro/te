import React from "react";

import "./sidebar.scss";

const Sidebar = ({ names, link: Link, clickHandler, currentPage }) => (
  <div className="sidebar">
    {names.map(({ path, label }) => (
      <Link
        to={path}
        key={label}
        onClick={() => clickHandler(label)}
        className={`sidebar__item ${
          currentPage === label ? "sidebar__item-active" : ""
        }`}
      >
        {label}
      </Link>
    ))}
  </div>
);

export default Sidebar;
