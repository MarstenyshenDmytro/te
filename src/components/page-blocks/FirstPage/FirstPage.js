import React, { useState } from "react";

import Portal from "../../../containers/Portal";
import ModalWindow from "../../ModalWindow";
import Button from "../../Button";

import "./firstPage.scss";

const FirstPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="first-page">
      <Button
        className="first-page__button"
        label="Open Window"
        onClick={handleClick}
      />
      {isOpen && (
        <Portal>
          <ModalWindow onClick={handleClick} />
        </Portal>
      )}
    </section>
  );
};

export default FirstPage;
