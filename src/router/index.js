import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Resume.vue'),
    },
    {
      path: '/movies',
      name: 'movies',
      beforeEnter: () => {
        window.location.href = 'https://brendanratesmovies.com';
      },
      children: [
        {
          path: '/movies//:pathMatch(.*)*',
          name: 'movies-subroute',
          beforeEnter: () => {
            window.location.href = 'https://brendanratesmovies.com';
          },
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'all',
      redirect: '/',
    }
  ],
});

export default router;