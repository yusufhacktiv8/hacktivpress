<template>
  <div class="main">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <a class="navbar-brand" href="#">HacktivPress</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <button type="button" class="btn btn-default" @click="logout" style="margin-top: 7px;">Logout</button>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <div class="">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    logout() {
      sessionStorage.removeItem('token');
      this.$router.push({ path: '/signin' });
    },
  },
  mounted() {
    if (!sessionStorage.getItem('token')) {
      this.$router.push({ path: '/signin' });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
