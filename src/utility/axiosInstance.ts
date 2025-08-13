import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://abc.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;