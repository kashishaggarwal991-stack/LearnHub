import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

export const signupUser = (data) => API.post("/register", data);

export const loginUser = (data) => API.post("/login", data);
