import { createRouter, createWebHistory } from 'vue-router';
import Details2View from '../views/Details2View.vue';
import Details3View from '../views/Details3View.vue';
import DetailsView from '../views/DetailsView.vue';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home',
      redirect: { name: 'home' },
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/details',
      name: 'details',
      component: DetailsView,
    },
    {
      path: '/details2',
      name: 'details2',
      component: Details2View,
    },
    {
      path: '/details3',
      name: 'details3',
      component: Details3View,
    },
  ],
});

export default router;
