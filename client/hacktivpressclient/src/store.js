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
      axios.get('http://localhost:3000/api/articles', {
        // headers: {
        //   Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        // },
      })
      .then((response) => {
        commit('loadArticles', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    },
  },
});
