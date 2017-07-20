import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
  },
  mutations: {
    loadArticles(state, payload) {
      state.articles = payload;
    },
  },
  actions: {
    getArticles({ commit }) {
      axios.get('/api/articles', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        commit('loadArticles', response.data);
      })
      .cathc((error) => {
        console.log(error);
      });
    },
  },
});
