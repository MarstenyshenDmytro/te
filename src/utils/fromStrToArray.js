export const fromStrToArray = (str, keysName) => {
  const values = str.toString().split(",");
  const array = [];
  values.forEach((value, i) => array.push({ name: `${keysName}${i}`, value }));
  return array;
};
