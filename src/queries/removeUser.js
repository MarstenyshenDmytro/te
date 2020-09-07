import { db } from "../db/index";

export const removeUser = (id, callback) => {
  db.transaction((t) => {
    t.executeSql(
      `DELETE FROM users WHERE id=?`,
      [id],
      (t, r) => {
        callback();
        console.log(`Value has been removed.`);
      },
      (t, errors) => {
        console.log(errors);
      }
    );
  });
};
