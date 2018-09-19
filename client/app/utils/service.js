import axios from 'axios';
import token from './.token';

axios.defaults.baseURL = process.env.API_PATH || 'http://localhost:8081';
axios.defaults.headers.common.Authorization = token;

axios.defaults.crossDomain = true;

export const get = async (url, values) => {
  const surveys = await axios.get(url, values);
  return surveys;
};

export const post = async (url, data) => {
  const survey = await axios.post(url, data);
  return survey;
};

export const authenticate = async (url, data) => {
  const login = await axios.post(url, { ...data, grant_type: 'password' });
  axios.defaults.headers.common.Authorization = `${login.data.token_type} ${
    login.data.access_token.oauth_token
  }`;

  return `${login.data.token_type} ${login.data.access_token.oauth_token}`;
};
