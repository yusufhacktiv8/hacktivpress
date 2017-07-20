<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <article-list></article-list>
    </div>
  </div>
</template>

<script>

import ArticleList from '@/components/ArticleList';

export default {
  name: 'MainArticle',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
    ArticleList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
