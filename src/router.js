import Vue from 'vue';
import Router from 'vue-router';
import CocktailsView from '@/views/CocktailView.vue'
import CocktailDetailsView from '@/views/CocktailDetailsView.vue'

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/cocktails',
      name: 'cocktails',
      component: CocktailsView
    },
    {
      path: '/cocktails/details',
      name: 'details',
      component: CocktailDetailsView,
      props: true
    }
  ]
});
