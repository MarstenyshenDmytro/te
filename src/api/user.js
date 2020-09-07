import client from "./mockClient";

const getUserAPI = () => client.get("/user/user").then((r) => r.data);

export { getUserAPI };
