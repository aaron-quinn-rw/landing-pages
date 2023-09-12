export default [
    {
      path: '/basketball/',
      redirect: { name: 'Fantasy Basketball Draft Kit' },
    },
    {
      path: '/basketball/draft-kit',
      name: 'Fantasy Basketball Draft Kit',
      component: () => import('@/views/basketball/DraftKit.vue'),
    },
  ];
  