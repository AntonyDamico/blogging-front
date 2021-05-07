import axios from 'axios';
import { BASE_URL } from '@/common/constants';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
});

axiosClient.interceptors.request.use((config) => {
  if (config.url.substr(-1) !== '/') {
    // eslint-disable-next-line no-param-reassign
    config.url += '/';
  }
  return config;
});

export const ArticleService = {
  baseString: 'articles',

  all(sortOption) {
    return axiosClient.get(this.baseString, { params: { sort: sortOption } });
  },
};
