import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.86.6:3333/',
  headers: {
    Authorization:
      'Bearer Mg.U6bmekEHmewMhjN_zZh3wUGE9uKH3m-Z31pMdKN-r6d0nBa7nAz86_RMiVdl',
  },
});
