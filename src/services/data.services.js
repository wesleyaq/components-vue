import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_URL,
});

export const getAll = (url) => {
  return api.get(url);
};

export const getCustomAll = (url) => {
  return axios.get(`${url}`);
};

export const save = (url, data) => {
  return api.post(url, data);
};

export const update = (url, data) => {
  return api.put(url, data);
};

