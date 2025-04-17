import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.86.12:3333/',
  headers: {
    Authorization:
      'Bearer NQ.8354nd2js9qgXIeMBsOqvUb5zAGGQkqS5ILm24nBl2ObTPm_CUlgw79kDqzN',
  },
});
