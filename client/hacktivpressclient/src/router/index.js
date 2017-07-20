import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import MainArticle from '@/components/MainArticle';
import SignIn from '@/components/SignIn';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'MainArticle',
          component: MainArticle,
        },
      ],
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
    },
  ],
});
