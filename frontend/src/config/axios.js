import axios from "axios";
// console.log('H', process.env.REACT_APP_BASE_URL);
export const axiosi = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8000",
});
