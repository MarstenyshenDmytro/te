import {
  SUCCESS_AUTHORIZATION,
  FAILED_AUTHORIZATION,
} from "../actions/userAuthorization";

export const initialState = {
  loading: true,
  success: false,
  failed: false,
};

export const userAuthorization = (state, { type }) => {
  switch (type) {
    case SUCCESS_AUTHORIZATION:
      return { ...state, loading: false, success: true };
    case FAILED_AUTHORIZATION:
      return { ...state, loading: false, failed: true };
    default:
      return state;
  }
};
