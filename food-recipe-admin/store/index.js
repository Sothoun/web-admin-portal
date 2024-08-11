// store/index.js

export const state = () => ({
  auth: {
    loggedIn: false
  }
});

export const mutations = {
  SET_LOGGED_IN(state, status) {
    state.auth.loggedIn = status;
  }
};

export const actions = {
  login({ commit }) {
    // Simulate a login action
    commit('SET_LOGGED_IN', true);
  },
  logout({ commit }) {
    // Simulate a logout action
    commit('SET_LOGGED_IN', false);
  }
};
