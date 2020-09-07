import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import "./form.scss";

const Form = ({ children, onSubmit, defaultValues }) => {
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur",
    defaultValues,
  });

  const handleReset = () => {};

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {children(register, errors, reset)}
    </form>
  );
};

export default Form;
