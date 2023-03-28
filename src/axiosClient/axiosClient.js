import axios from "axios";

let BASE_URL = "http://localhost:4000";
if (process.env.NODE_ENV) {
  BASE_URL = process.env.BASE_URL;
}
export default axios.create({
  baseURL: BASE_URL,
});
