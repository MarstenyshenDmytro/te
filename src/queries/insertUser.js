import { db } from "../db/index";

export const insertUser = ({ name, secondName, phone, email }, callback) => {
  db.transaction((t) => {
    t.executeSql(
      `INSERT INTO users(name, secondName, email, phone) VALUES (?, ?, ?, ?)`,
      [name, secondName, email, phone],
      (t, r) => {
        callback();
        console.log(`The 'id' of the new record  is ${r.insertId}`);
      }
    );
  });
};
