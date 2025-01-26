import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://mirror-app-frontend-demo-server.vercel.app/',
  timeout: 5000,
  withCredentials: true,
  headers: {
    Accept: 'Application/json',
    'Content-Type': 'Application/json',
  },
});