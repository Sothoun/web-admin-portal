import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// export store module
export default () =>
  new Vuex.Store({
    state: {
      mini_sidebar: false,
      dark_mode: false,
      loading: false,
      setup_system: {
        general_info: {},
      },
      is_customer_screen_opened: false,
      products: [],
      page_title: null,
      languages: [],
      exchange_rates: [],
    },

    // to handle state
    getters: {


      isDataLoading(state) {
        return state.loading;
      },

    },

    // to handle actions
    actions: {

    },

    // to handle mutations
    mutations: {


      setIsDataLoading(state, payload) {
        state.loading = payload;
      },
    },
  });
