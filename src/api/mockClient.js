import axios from "axios";
import Qs from "qs";

import { API_URL, MOCK_ENABLED, MOCK_URLS } from "../app.constants";

const client = axios.create({ baseURL: API_URL });

axios.paramsSerializer = (params) =>
  Qs.stringify(params, { arrayFormat: "brackets" });

client.interceptors.request.use((config) => {
  if (MOCK_ENABLED) {
    for (const [key, value] of MOCK_URLS) {
      const re = new RegExp(key);

      if (config.url.match(re)) {
        config.baseURL = "http://localhost:3000/";
        config.url = value;
        config.method = "get";
        break;
      }
    }
  }
  return config;
});

export default client;
