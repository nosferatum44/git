import axios from 'axios';

let api = null;

function getInitializedApi() {
  if (api) return api;
  api = axios.create({
    timeout: 60000,
    baseURL: 'https://api.github.com',
  });

  return api;
}

export default getInitializedApi();
