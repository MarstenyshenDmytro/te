import React, { useState } from "react";
import { useHistory } from "react-router";

import { getTokenAPI } from "../../api/token";
import { getUserAPI } from "../../api/user";

import Form, { Field, Input } from "../../components/form";
import Button from "../../components/Button";

import { validators } from ".././../utils";

import "./signIn.scss";

const filedValidators = {
  email: {
    required: validators.required,
    validate: {
      emailValidator: (value) =>
        validators.emailRegularExpresion(value) || "Invalid email",
    },
  },
  password: {
    required: validators.required,
  },
};

const SignIn = () => {
  const history = useHistory();
  const [isIncorrenctUser, setIsIncorrectUser] = useState();

  const onSubmit = ({ email, password }) => {
    const raw = { email, password };
    getUserAPI().then(({ email, password }) => {
      if (raw.email === email && raw.password === password) {
        getTokenAPI(raw).then(({ token }) => {
          sessionStorage.setItem("token", token);
          history.push("/");
        });
      } else {
        setIsIncorrectUser(true);
      }
    });
  };

  return (
    <div className="sign-in">
      <section className="sign-in__form">
        <p className="sign-in__header">Sign in</p>
        <Form onSubmit={onSubmit}>
          {(register, errors) => (
            <>
              <Field
                name="email"
                label="Your email"
                placeholder="enter Your email"
                errors={errors}
                component={Input}
                register={register}
                validator={filedValidators.email}
              />
              <Field
                name="password"
                label="Your password"
                placeholder="enter Your password"
                errors={errors}
                component={Input}
                type="password"
                register={register}
                validator={filedValidators.password}
              />
              {isIncorrenctUser && (
                <p className="sign-in__failed-message">Authorization failed</p>
              )}
              <Button
                className="sign-in__button"
                type="submit"
                label="Sign in"
              />
            </>
          )}
        </Form>
      </section>
    </div>
  );
};
export default SignIn;
