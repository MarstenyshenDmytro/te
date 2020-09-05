import React, { useState, useContext } from "react";

import ContextApp from "../../context";

import ListItem from "./ListItem/ListItem";
import Button from "../Button";

import "./modalWindow.scss";

const ModalWindow = ({ onClick }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const {
    itemsInfo: { list },
  } = useContext(ContextApp);

  const handleClick = ({ target, currentTarget }) => {
    target === currentTarget && onClick();
  };

  const handleCheckboxClick = (item) => {
    setCurrentItem(item);
  };

  return (
    <div className="modal-window__backdrop" onClick={handleClick}>
      <div className="modal-window__content">
        <header className="modal-window__header">
          {[...Array(50)].map((item, i) => (
            <Button
              label={i + 1}
              onClick={() => handleCheckboxClick(i + 1)}
              className={`modal-window__checkbox ${
                i + 1 === currentItem ? "modal-window__checkbox-active" : ""
              } ${list[i] ? "modal-window__checkbox_selected-in-table" : ""}`}
              key={`${item}${i}`}
            />
          ))}
        </header>
        <div className="modal-window__items">
          {[...Array(50)].map((item, i) => (
            <ListItem
              id={i + 1}
              text="text"
              key={`${item}${i}`}
              selectedId={currentItem}
              isSelectedInTable={list[i]}
            />
          ))}
        </div>
        <div className="modal-window__buttons">
          <Button
            label="CANCEL"
            onClick={onClick}
            className="modal-window__button modal-window__button_cancel"
          />
          <Button
            label="Ok"
            onClick={onClick}
            className="modal-window__button modal-window__button_ok"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
