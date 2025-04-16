import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.86.12:3333/',
  headers: {
    Authorization:
      'Bearer NA.Yu0CJ-jkrU2c_8nSSB9DkqiUPkJ4YIC3OY_c1rQiCwYVZqilmhEibWnIf-TN',
  },
});
