<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <ul class="list-group">
        <li class="list-group-item" v-for="article in articles">
          {{ article.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'ArticleList',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  mounted() {
    this.$store.dispatch('getArticles');
  },
  computed: mapState(['articles']),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
