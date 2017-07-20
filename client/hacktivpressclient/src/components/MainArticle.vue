<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div class="panel panel-default">
        <div class="panel-heading">Panel heading without title</div>
        <div class="panel-body">
          Sign In
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Panel title</h3>
        </div>
        <div class="panel-body">
          Panel content
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainArticle',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
