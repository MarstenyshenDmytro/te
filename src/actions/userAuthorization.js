export const SUCCESS_AUTHORIZATION = "SUCCESS_AUTHORIZATION";
export const FAILED_AUTHORIZATION = "FAILED_AUTHORIZATION";

export function successAuthorization() {
  return {
    type: SUCCESS_AUTHORIZATION,
  };
}

export function failedAuthorization() {
  return {
    type: FAILED_AUTHORIZATION,
  };
}
