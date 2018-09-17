import axios from 'axios';
import token from './.token';

axios.defaults.baseURL = process.env.API_PATH || 'http://localhost:8081';
axios.defaults.headers.common.Authorization = token;

export const get = async (url, values) => {
  const surveys = await axios.get(url, values);
  return surveys;
};

export const post = async (url, data) => {
  const survey = await axios.post(url, data);
  return survey;
};
