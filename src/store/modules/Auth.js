import { AuthService } from '../../api/service';

export default {
  namespaced: true,

  state: {
    user: null,
  },

  getters: {
    isAuthenticated: (state) => Boolean(state.user),
  },

  actions: {
    async login({ commit }, credentials) {
      const { data } = await AuthService.login(credentials);
      commit('setUser', data);
    },
    logout({ commit }) {
      commit('setUser', null);
    },
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
};
