import React, { useRef } from "react";

import "./listItem.scss";

const ListItem = ({ id, text, selectedId, isSelectedInTable }) => {
  const ref = useRef();

  id === selectedId &&
    ref.current.scrollIntoView({ block: "start", behavior: "smooth" });

  return (
    <div
      className={`list-item ${
        isSelectedInTable ? "list-item_selected-in-table" : ""
      }`}
      ref={ref}
    >
      <p className="list-item__id">{id}</p>
      <p className="list-item__text">{text}</p>
    </div>
  );
};

export default ListItem;
