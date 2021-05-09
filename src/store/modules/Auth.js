import { AuthService, AxiosClient } from '@/api/service';
import { createBasicToken } from '@/api/utils';
import eventBus from '@/common/event-bus';

export default {
  namespaced: true,

  state: {
    user: null,
  },

  getters: {
    isAuthenticated: (state) => Boolean(state.user),
    username: ({ user }) => user?.username,
    token: ({ user }) => user?.token,
  },

  actions: {
    async login({ dispatch }, credentials) {
      const { data } = await AuthService.login(credentials);
      dispatch('setLoggedUser', { credentials, data });
    },

    async register({ dispatch }, credentials) {
      const { data } = await AuthService.register(credentials);
      dispatch('setLoggedUser', { credentials, data });
    },

    setLoggedUser({ commit }, { credentials, data }) {
      // eslint-disable-next-line no-param-reassign
      data.token = createBasicToken(credentials);
      AxiosClient.setAuthHeader(data.token);
      commit('setUser', data);
      eventBus.$emit('loggedUser');
    },

    logout({ commit }) {
      AxiosClient.deleteAuthHeader();
      commit('setUser', null);
    },
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
};
