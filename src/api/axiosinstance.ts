import axios from "axios";
export const API = (port: number) => {
  const baseURL = typeof window !== "undefined"
    ? `/api-proxy/${port}`
    : `https://adminpre.srmcem.ac.in:${port}`;

  return axios.create({
    baseURL,
  });
};
