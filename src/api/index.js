import { root } from './config';
import axios from 'axios';

export const api = Object.freeze({
  services: {
    fetch: () => {
      return axios(`${root}`);
    },
    fetchById: (id) => {
      return axios(`${root}/${id}`);
    }
  }
});
