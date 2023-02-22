export default [
  {
    path: '/baseball/',
    redirect: { name: 'Fantasy Baseball Draft Kit' },
  },
  {
    path: '/baseball/deal',
    name: 'Fantasy Baseball Draft Kit: 10% Off',
    component: () => import('@/views/baseball/Discount.vue'),
  },
  {
    path: '/baseball/auction-values',
    name: 'Fantasy Baseball Auction Values',
    component: () => import('@/views/baseball/AuctionValues.vue'),
  },
  {
    path: '/baseball/best-site',
    name: 'Fantasy Baseball Best Site',
    component: () => import('@/views/baseball/BestSite.vue'),
  },
  {
    path: '/baseball/cheat-sheet',
    name: 'Fantasy Baseball Cheat Sheet',
    component: () => import('@/views/baseball/CheatSheet.vue'),
  },
  {
    path: '/baseball/draft-kit',
    name: 'Fantasy Baseball Draft Kit',
    component: () => import('@/views/baseball/DraftKit.vue'),
  },
  {
    path: '/baseball/draft-software',
    name: 'Fantasy Baseball Draft Software',
    component: () => import('@/views/baseball/DraftSoftware.vue'),
  },
  {
    path: '/baseball/mock-draft',
    name: 'Fantasy Baseball Mock Draft Simulator',
    component: () => import('@/views/baseball/MockDraft.vue'),
  },
  {
    path: '/baseball/news',
    name: 'Fantasy Baseball News',
    component: () => import('@/views/baseball/News.vue'),
  },
  {
    path: '/baseball/projections',
    name: 'Fantasy Baseball Projections',
    component: () => import('@/views/baseball/Projections.vue'),
  },
  {
    path: '/baseball/rankings',
    name: 'Fantasy Baseball Rankings',
    component: () => import('@/views/baseball/Rankings.vue'),
  },
  {
    path: '/baseball/sleepers',
    name: 'Fantasy Baseball Sleepers',
    component: () => import('@/views/baseball/Sleepers.vue'),
  },
  {
    path: '/baseball/tips',
    name: 'Fantasy Baseball Tips',
    component: () => import('@/views/baseball/Tips.vue'),
  },
];
