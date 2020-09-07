import { db, createTable } from "../db/index";

export const getUsers = (callback) => {
  db.transaction((t) =>
    t.executeSql(
      `SELECT * FROM users`,
      [],
      (t, result) => {
        callback(Array.from(result.rows));
      },
      (t, error) => {
        t.executeSql(
          `CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, secondName TEXT, email ARRAY, phone ARRAY )`,
          [],
          () => callback([]),
          null
        );
      }
    )
  );
};
