import client from "./mockClient";

const getTokenAPI = (raw) =>
  client.post("/token/token", raw).then((r) => r.data);

export { getTokenAPI };
