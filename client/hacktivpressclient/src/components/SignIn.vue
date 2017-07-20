<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div class="panel panel-default" style="margin-top: 150px;">
        <div class="panel-heading">
          <h3 class="panel-title">Sign In</h3>
        </div>
        <div class="panel-body">
          <form>
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" class="form-control" v-model="username" id="username">
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" v-model="password" id="pwd">
            </div>
            <div class="checkbox">
              <label><input type="checkbox"> Remember me</label>
            </div>
            <button type="button" class="btn btn-default" @click="signIn">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    signIn() {
      this.$http.post('http://localhost:3000/api/users/signin', {
        username: this.username,
        password: this.password,
      })
      .then((result) => {
        sessionStorage.setItem('token', result.data.token);
        this.$router.push({ path: '/' });
      })
      .catch(() => {
        console.log('Login error');
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
