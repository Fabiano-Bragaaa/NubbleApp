import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.86.12:3333/',
  headers: {
    Authorization:
      'Bearer Nw.ciTokF5eWLbQpJzc-DSdeZghMxIqyVOkafdDGdRW-HWWebMNd2IzmvPaZ7qB',
  },
});
