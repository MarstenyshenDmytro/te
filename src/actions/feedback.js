export const CHANGE_TAB = "CHANGE_TAB";
export const UPDATE_USER = "UPDATE_USER";
export const CHANGE_FORM_VALUES = "GET_FORM_VALUES";
export const UPDATE_USERS_LIST = "UPDATE_USERS_LIST";

export const changeTab = (tabNumber) => {
  return { type: CHANGE_TAB, payload: tabNumber };
};

export const updateUser = (formValues, tabNumber, isUpdateUser) => {
  return {
    type: UPDATE_USER,
    payload: { formValues, tabNumber, isUpdateUser },
  };
};

export const changeFormValues = (data) => {
  return { type: CHANGE_FORM_VALUES, payload: data };
};

export const updateUsersList = (users) => {
  return { type: UPDATE_USERS_LIST, payload: users };
};
