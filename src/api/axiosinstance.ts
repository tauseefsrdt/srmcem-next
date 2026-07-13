import axios from "axios";
export const API = (port: number) => {
  return axios.create({
    baseURL: `https://adminpre.srmcem.ac.in:${port}`,
  });
};
