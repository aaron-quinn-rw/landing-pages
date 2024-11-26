export default [
  {
    path: '/football/',
    redirect: { name: 'Fantasy Football Draft Kit' },
  },
  {
    path: '/football/auction-values',
    name: 'Fantasy Football Auction Values',
    component: () => import('@/views/football/AuctionValues.vue'),
  },
  {
    path: '/football/best-site',
    name: 'Fantasy Football Best Site',
    component: () => import('@/views/football/BestSite.vue'),
  },
  {
    path: '/football/cheat-sheet',
    name: 'Fantasy Football Cheat Sheet',
    component: () => import('@/views/football/CheatSheet.vue'),
  },
  {
    path: '/football/cheat-sheet-ppr',
    name: 'Fantasy Football PPR Cheat Sheet',
    component: () => import('@/views/football/CheatSheetPPR.vue'),
  },
  {
    path: '/football/deal',
    name: 'Fantasy Football Draft Kit: 20% Off',
    component: () => import('@/views/football/Discount.vue'),
  },
  {
    path: '/football/draft-kit',
    name: 'Fantasy Football Draft Kit',
    component: () => import('@/views/football/DraftKit.vue'),
  },
  {
    path: '/football/football-draft-kit',
    name: 'Football Draft Kit',
    component: () => import('@/views/football/DraftKitNoFantasy.vue'),
  },
  {
    path: '/football/draft-software',
    name: 'Fantasy Football Draft Software',
    component: () => import('@/views/football/DraftSoftware.vue'),
  },
  {
    path: '/football/draft-strategy',
    name: 'Fantasy Football Draft Strategy',
    component: () => import('@/views/football/DraftStrategy.vue'),
  },
  {
    path: '/football/mock-draft',
    name: 'Fantasy Football Mock Draft Simulator',
    component: () => import('@/views/football/MockDraft.vue'),
  },
  {
    path: '/football/news',
    name: 'Fantasy Football News',
    component: () => import('@/views/football/News.vue'),
  },
  {
    path: '/football/projections',
    name: 'Fantasy Football Projections',
    component: () => import('@/views/football/Projections.vue'),
  },
  {
    path: '/football/rankings',
    name: 'Fantasy Football Rankings',
    component: () => import('@/views/football/Rankings.vue'),
  },
  {
    path: '/football/rankings-dynasty',
    name: 'Fantasy Football Dynasty Rankings',
    component: () => import('@/views/football/RankingsDynasty.vue'),
  },
  {
    path: '/football/rankings-idp',
    name: 'Fantasy Football IDP Rankings',
    component: () => import('@/views/football/RankingsIDP.vue'),
  },
  {
    path: '/football/rankings-ppr',
    name: 'Fantasy Football PPR Rankings',
    component: () => import('@/views/football/RankingsPPR.vue'),
  },
  {
    path: '/football/sleepers',
    name: 'Fantasy Football Sleepers',
    component: () => import('@/views/football/Sleepers.vue'),
  },
  {
    path: '/football/tips',
    name: 'Fantasy Football Tips & Tricks',
    component: () => import('@/views/football/Tips.vue'),
  },
  {
    path: '/football/playoffs',
    name: 'Fantasy Football Playoffs',
    component: () => import('@/views/football/Playoffs.vue'),
  }
];
