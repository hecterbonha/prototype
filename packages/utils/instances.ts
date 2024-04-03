import axios from "axios";

export const proxy = axios.create({
  baseURL: "/",
  headers: { "X-Custom-Header": "self" },
});
