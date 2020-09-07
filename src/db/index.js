const version = 1.0;
const dbName = "users";
const dbDisplayName = "list_of_users";
const dbSize = 2 * 1024 * 1024;

export const db = openDatabase(
  dbName,
  version,
  dbDisplayName,
  dbSize,
  (database) => {
    console.log("Database has been created.");
  }
);
