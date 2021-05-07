import axios from 'axios';
import { BASE_URL } from '@/common/constants';

export const AxiosClient = {
  client: axios.create({
    baseURL: BASE_URL,
  }),

  setAuthHeader(token) {
    AxiosClient.client.defaults.headers.Authorization = `Basic ${token}`;
  },
};

AxiosClient.client.interceptors.request.use((config) => {
  if (config.url.substr(-1) !== '/') {
    // eslint-disable-next-line no-param-reassign
    config.url += '/';
  }
  return config;
});

export const ArticleService = {
  baseString: 'articles',
  client: AxiosClient.client,

  all(sortOption) {
    return this.client.get(this.baseString, { params: { sort: sortOption } });
  },
};

export const AuthService = {
  baseString: 'users',
  client: AxiosClient.client,

  login(credentials) {
    const url = `${this.baseString}/login`;
    return this.client.post(url, credentials);
  },
};
