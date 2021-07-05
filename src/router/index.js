import { createRouter, createWebHistory } from 'vue-router';

import generalRoutes from '@/router/sections/general';
import footballRoutes from '@/router/sections/football';
import baseballRoutes from '@/router/sections/baseball';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: generalRoutes.concat(footballRoutes, baseballRoutes),
});

router.beforeEach((to, from) => {
  document.title = `${to.name} - RotoWire`;
});

export default router;
