export default [
    {
      path: '/hockey/',
      redirect: { name: 'Fantasy Hockey Draft Kit' },
    },
    {
      path: '/hockey/draft-kit',
      name: 'Fantasy Hockey Draft Kit',
      component: () => import('@/views/hockey/DraftKit.vue'),
    },
  ];
  