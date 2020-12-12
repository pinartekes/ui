import axios from "axios";

let url = "http://localhost:8000/";

const instance = axios.create({
  baseURL: url,
  headers: { "Content-Type": "application/json" },
});


instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;