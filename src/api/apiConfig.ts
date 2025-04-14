import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.86.2:3333/',
  headers: {
    Authorization:
      'Bearer Mw.aNL0Q_PlYnPyyA3_feWgvUzWON-qzMJ5iP-WkUFNwUGNdCclLtMuQGXyXW67',
  },
});
