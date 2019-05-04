import Vue from 'vue';
import Router from 'vue-router';
import CocktailsView from '@/views/CocktailView.vue'

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/cocktails',
      name: 'cocktails',
      component: CocktailsView
    }
  ]
});
