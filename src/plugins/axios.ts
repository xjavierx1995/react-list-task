import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://6172cfe5110a740017222e2b.mockapi.io",
  // headers: { 'X-Custom-Header': 'foobar' },
});
