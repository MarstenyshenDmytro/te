import React, { useState, useEffect, useReducer } from "react";

import {
  changeTab,
  updateUser,
  changeFormValues,
  updateUsersList,
} from "../../actions/feedback";
import { initialState, feedback } from "../../reducers/feedback";

import { getUsers, insertUser, editUser, removeUser } from "../../queries";

import Tab from "../../components/Tab";
import FeedbackForm from "../../components/FeedbackForm";
import UsersList from "../../components/UsersList";

import "./feedback.scss";

const tabs = [
  {
    name: "Add",
    component: FeedbackForm,
  },
  {
    name: "List",
    component: UsersList,
  },
];

const callback = (func, action) => {
  return () => func(action);
};
const Feedback = () => {
  const [state, dispatch] = useReducer(feedback, initialState);
  const { tabNumber, isUpdateUser } = state;
  const { component: Component } = tabs[tabNumber];
  const handleGetUsers = (data) => {
    dispatch(updateUsersList(data));
  };

  const handleTabClick = (index) => {
    dispatch(changeTab(index));
  };

  const onFormSubmit = ({ name, secondName, phone, email, id }, e) => {
    if (isUpdateUser) {
      editUser(
        { name, secondName, phone, email, id },
        callback(getUsers, handleGetUsers)
      );
    } else {
      insertUser(
        { name, secondName, phone, email },
        callback(getUsers, handleGetUsers)
      );
    }
    e.target.reset();
  };

  const handleUserEdit = (formData) => {
    dispatch(updateUser(formData, 0, true));
  };

  const handleUserDelete = (id) => {
    const isConfirm = window.confirm("Delete item?");
    isConfirm && removeUser(id, callback(getUsers, handleGetUsers));
  };

  useEffect(() => {
    getUsers(handleGetUsers);
  }, []);

  return (
    <section className="feedback">
      <div className="feddback__tabs">
        {tabs.map(({ name }, i) => (
          <Tab
            key={name}
            name={name}
            index={i}
            isActive={i === tabNumber}
            onClick={handleTabClick}
          />
        ))}
      </div>
      <div className="feedback__content">
        <Component
          state={state}
          handlers={{ handleUserEdit, onFormSubmit, handleUserDelete }}
        />
      </div>
    </section>
  );
};

export default Feedback;
