import React, { useState } from "react";

import Form, { Input, Field } from "../form";
import Button from "../Button";

import { fromStrToArray, fromArrayToObject, validators } from "../../utils";

import "./feedbackForm.scss";

const filedValidators = {
  name: {
    required: validators.required,
  },
  secondName: {
    required: validators.required,
  },
  email: {
    validate: {
      emailValidator: (value) =>
        validators.emailRegularExpresion(value) || "Invalid email",
    },
  },
};
const FeedbackForm = ({
  state: {
    formValues: { name, secondName, phone, email, id },
  },
  handlers: { onFormSubmit },
}) => {
  const [phoneFields, setPhoneField] = useState(
    phone ? fromStrToArray(phone, "phone") : [{ name: "phone", value: "" }]
  );
  const [emailFields, setEmailField] = useState(
    email ? fromStrToArray(email, "email") : [{ name: "email", value: "" }]
  );

  const handlePhoneFieldAdd = () => {
    setPhoneField([...phoneFields, { name: `phone${phoneFields.length}` }]);
  };

  const handleEmailFieldAdd = () => {
    setEmailField([...emailFields, { name: `phone${emailFields.length}` }]);
  };

  const onSubmit = (data, e) => {
    const phone = [];
    const email = [];
    const { name, secondName } = data;
    phoneFields.forEach(({ name }) => phone.push(data[name]));
    emailFields.forEach(({ name }) => email.push(data[name]));
    setPhoneField([{ name: "phone", value: "" }]);
    setEmailField([{ name: "email", value: "" }]);
    onFormSubmit({ name, secondName, phone, email, id }, e);
  };

  return (
    <section className="feedback-form">
      <Form
        onSubmit={onSubmit}
        defaultValues={{
          name,
          secondName,
          ...fromArrayToObject(phoneFields),
          ...fromArrayToObject(emailFields),
        }}
      >
        {(register, errors) => (
          <>
            <Field
              name="name"
              placeholder="enter Your name"
              errors={errors}
              component={Input}
              register={register}
              validator={filedValidators.name}
            />
            <Field
              name="secondName"
              placeholder="enter Your second name"
              errors={errors}
              component={Input}
              register={register}
              validator={filedValidators.secondName}
            />
            <div className="feedback-form__additional-fields">
              <div className="feedback-form__additional-field">
                <div>
                  {phoneFields.map(({ name }) => (
                    <Field
                      key={name}
                      name={name}
                      placeholder="enter Your phone"
                      errors={errors}
                      component={Input}
                      register={register}
                    />
                  ))}
                </div>
                <div className="feedback-form__plus-button-block">
                  <Button
                    className="feedback-form__plus-button"
                    label="+"
                    onClick={handlePhoneFieldAdd}
                  />
                </div>
              </div>
              <div className="feedback-form__additional-field">
                <div>
                  {emailFields.map(({ name }) => (
                    <Field
                      key={name}
                      name={name}
                      placeholder="enter Your email"
                      errors={errors}
                      component={Input}
                      register={register}
                      validator={filedValidators.email}
                    />
                  ))}
                </div>
                <div className="feedback-form__plus-button-block">
                  <Button
                    className="feedback-form__plus-button"
                    label="+"
                    onClick={handleEmailFieldAdd}
                  />
                </div>
              </div>
            </div>
            <Button className="sign-in__button" type="submit" label="Submit" />
          </>
        )}
      </Form>
    </section>
  );
};

export default FeedbackForm;
