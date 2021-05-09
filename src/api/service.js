import axios from 'axios';
import FormData from 'form-data';
import { BASE_URL } from '@/common/constants';
import { getErrorMessage } from './utils';

export const AxiosClient = {
  client: axios.create({
    baseURL: BASE_URL,
  }),

  setAuthHeader(token) {
    this.client.defaults.headers.Authorization = `Basic ${token}`;
  },

  deleteAuthHeader() {
    delete this.client.defaults.headers.Authorization;
  },

  get(url, data = {}) {
    return this.client.get(url, data).catch(this.errorHandler);
  },

  post(url, data, headers) {
    return this.client.post(url, data, headers)
      .catch(this.errorHandler);
  },

  posWithtFile(url, data) {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    return this.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        accept: 'application/json',
      },
    });
  },

  errorHandler(e) {
    const errorMessage = getErrorMessage(e.response.data);
    throw new Error(errorMessage);
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
  client: AxiosClient,

  all(sortOption) {
    return this.client.get(this.baseString, { params: { sort: sortOption } });
  },

  getByUrl(url) {
    return axios.get(url);
  },

  getBySlug(slug) {
    const url = `${this.baseString}/${slug}`;
    return this.client.get(url);
  },

  submitArticle(article) {
    return this.client.posWithtFile(this.baseString, article);
  },
};

export const AuthService = {
  baseString: 'users',
  client: AxiosClient,

  login(credentials) {
    const url = `${this.baseString}/login`;
    return this.client.post(url, credentials);
  },

  register(credentials) {
    const url = 'register';
    return this.client.post(url, credentials);
  },
};
