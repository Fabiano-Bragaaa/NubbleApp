import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.86.12:3333/',
  headers: {
    Authorization:
      'Bearer Ng.Gf5W5XPBfgCN1WEJsCrtP3tL7GUAGj-Zgj9U0hy8R7n-mtic9VMmbpF5eNA5',
  },
});
