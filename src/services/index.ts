import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

console.log('BASE_URL: ', BASE_URL);

const service = axios.create({
  baseURL: BASE_URL,
  timeout: 300000,
  // withCredentials: true, // refreshToken cookie 주고받기 위해
});

// Api Request option or return value setting
service.interceptors.request.use(
  (config) => {
    config.data = config.data || {};
    config.url = BASE_URL + config.url!;
    // config.requestTime = Date.now();

    // Store에 저장된 token 있을시 header에 setting
    // store.jwt && (config.headers["Authorization"] = jwt

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

// Api Response option or return value setting
service.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log('axios error', error);
    return Promise.reject(error);
  },
);

export default service;
