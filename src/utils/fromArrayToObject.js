export const fromArrayToObject = (array) => {
  const obj = {};
  array.forEach(({ name, value }) => (obj[name] = value));
  return obj;
};
