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
      AxiosClient.setAuthHeader(createBasicToken(credentials));
      commit('setUser', data);
      eventBus.$emit('loggedUser');
    },

    logout({ commit }) {
      AxiosClient.deleteAuthHeader();
      commit('setUser', null);
      if (this.$route.name !== 'Home') this.$router.push('Home');
    },
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
};
