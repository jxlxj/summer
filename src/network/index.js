import axios from "axios";
const network = axios.create({
  baseURL: "http://localhost:6741/",
  timeout: 1000,
});
export default network;
