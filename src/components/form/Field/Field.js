import React, { useState, useCallback } from "react";

import "./field.scss";

const Field = ({
  name,
  label,
  placeholder,
  errors,
  type,
  register,
  component: Component,
  validator,
}) => {
  const error = errors[name];
  const [isFocus, setIsFocus] = useState(false);

  const handleControl = () => {
    setIsFocus(!isFocus);
  };

  const classes = useCallback(
    (mainClass) =>
      error && !isFocus ? `${mainClass} ${mainClass}_error` : mainClass,
    [error, isFocus]
  );

  return (
    <div className="field">
      {label && <p className="field__name">{label}</p>}
      <div className={classes("field__input")}>
        <Component
          name={name}
          placeholder={placeholder}
          handleControl={handleControl}
          register={register}
          isFocus={isFocus}
          validator={validator}
          type={type}
        />
      </div>
      <p className="field__error-text">{error && !isFocus && error.message}</p>
    </div>
  );
};

export default Field;
