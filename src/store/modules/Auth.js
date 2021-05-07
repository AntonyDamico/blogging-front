import { AuthService, AxiosClient } from '@/api/service';

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
    async login({ commit }, credentials) {
      const { data } = await AuthService.login(credentials);
      AxiosClient.setAuthHeader(data.token);
      commit('setUser', data);
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
