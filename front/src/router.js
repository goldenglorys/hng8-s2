import Vue from 'vue';
import Router from 'vue-router';
import ui from './components/ui.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '/interact',
      component: ui
    }
   
  ]
});