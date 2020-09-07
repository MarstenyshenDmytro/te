import {
  CHANGE_TAB,
  UPDATE_USER,
  CHANGE_FORM_VALUES,
  UPDATE_USERS_LIST,
} from "../actions/feedback";

export const initialState = {
  tabNumber: 0,
  isUpdateUser: false,
  formValues: {},
  users: [],
};

export const feedback = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_TAB:
      return { ...state, tabNumber: payload };
    case UPDATE_USER:
      return {
        ...state,
        formValues: payload.formValues,
        tabNumber: payload.tabNumber,
        isUpdateUser: payload.isUpdateUser,
      };
    case CHANGE_FORM_VALUES:
      return { ...state, formValues: payload };
    case UPDATE_USERS_LIST:
      return { ...state, users: payload };
    default:
      return state;
  }
};
