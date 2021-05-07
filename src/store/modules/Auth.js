import { AuthService, AxiosClient } from '@/api/service';
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
    async login({ commit }, credentials) {
      const { data } = await AuthService.login(credentials);
      AxiosClient.setAuthHeader(data.token);
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
