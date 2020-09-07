import { db } from "../db/index";

export const editUser = ({ name, secondName, phone, email, id }, callback) => {
  db.transaction((t) => {
    t.executeSql(
      `UPDATE users SET name=?, secondName=?, email=?, phone=? WHERE id=?`,
      [name, secondName, email, phone, id],
      (t, r) => {
        callback();
        console.log(`Value has been changed.`);
      },
      (t, errors) => {
        console.log(errors);
      }
    );
  });
};
