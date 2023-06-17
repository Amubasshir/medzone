import { createRouter, createWebHistory } from 'vue-router';
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
  ],
});

export default router;
