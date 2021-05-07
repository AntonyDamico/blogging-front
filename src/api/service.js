import axios from 'axios';
import { BASE_URL } from './config';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
});

export const ArticleService = {
  baseString: 'articles',

  all() {
    return axiosClient.get(this.baseString);
  },
};
