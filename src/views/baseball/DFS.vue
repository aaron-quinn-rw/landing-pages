<template>
    <LandingPage
      :draft-kit-button="draftKit.button"
      :draft-kit-features="draftKit.features"
      :draft-kit-headline="draftKit.headline"
      :draft-kit-link="draftKit.link"
      :draft-kit-quote="draftKit.quote"
      :draft-kit-subhead="draftKit.subhead"
      :feature-button="feature.button"
      :feature-copy="feature.copy"
      :feature-heading="feature.heading"
      :feature-image="feature.image"
      :feature-link="feature.link"
      :feature-subhead="feature.subhead"
    />
  </template>
  
  <script setup>
  import LandingPage from '@/components/LandingPage.vue';
  import customizeBaseballPage from '@/helpers/baseball/customize-page';
  
  const { draftKit, feature } = customizeBaseballPage({
    feature: {
      heading: `2024 Fantasy Baseball DFS Tool Kit`,
      subhead: 'The Assistance You Need To Win More DFS Contests',
      copy: "We have all the best daily fantasy baseball tools collected together in one place, including our enhanced lineup optimizer.",
      button: 'Start Free 2-Day Trial',
      link: "https://www.rotowire.com/users/free-trial.php"
    },
    draftKit: {
        features: [
            {
                name: "Lineup Optimizer",
                desc: "Generate the optimal lineup on sites like DraftKings and FanDuel."
            },
            {
                name: "Value Report",
                desc: "Projections, salaries, and stats for daily fantasy sites."
            },
            {
                name: "Daily Projections",
                desc: "Check out our projected stats for hundreds of MLB players."
            },
            {
                name: "Daily Articles",
                desc: "Read our latest DFS baseball articles for advice and players you should target."
            },
            {
                name: "Daily Lineups",
                desc: "Check the lineups for every game as soon as they become available."
            },
            {
                name: "Daily Cheat Sheets",
                desc: "A breakdown of today's park factors and pitchers."
            },
            {
                name: "Lineup Card",
                desc: "Weather, injuries, matchups and more for today's games."
            },
            {
                name: "Latest News",
                desc: "You can rely on our fast, high quality fantasy baseball news updates."
            },
            {
                name: "Injury Report",
                desc: "MLB injuries by position and team."
            },
            {
                name: "Odds Report",
                desc: "A quick look at some Vegas odds that might be helpful when setting your lineups."
            },
            {
                name: "Saved Lineups + Alerts",
                desc: "Save lineups from the optimizer to import to daily sites."
            },
            {
                name: "Import FD & DK Lineups",
                desc: "Get breaking news alerts for players in existing lineups on FanDuel or DraftKings."
            },
            {
                name: "Ownership Projections",
                desc: "See which players we expect to be highly owned in daily fantasy contests."
            },
            {
                name: "Stats - Basic",
                desc: "Dive deep into our sortable MLB stats by season."
            },
            {
                name: "Stats - Advanced",
                desc: "Sortable, downloadable MLB player stats by season."
            },
            {
                name: "Stats - Batter vs. Pitcher",
                desc: "Find interesting matchups using batter career stats vs. today's expected pitchers."
            },
            {
                name: "Stats - Umpire Report",
                desc: "Use advanced umpire season and career stats when setting your DFS lineups."
            },
            {
                name: "Weather Report",
                desc: "See the weather that may impact today's MLB games."
            },
            {
                name: "Inside Edge Projections",
                desc: "Proprietary third-party projections plus salaries and stats for today's DFS slates."
            },
            {
                name: "DFS 101",
                desc: "Learn how to play daily fantasy baseball."
            },
        ],
        headline: `Why Choose RotoWire?`,
        subhead: `Resources that give you a winning edge.`,
        button: `Explore Our DFS Tools FREE`,
        link: "https://www.rotowire.com/users/free-trial.php",
        quote: "Great tools. I've seen instant results and it's also user friendly. Much better in my opinion than the other sites!!!",
    }
  });
  </script>
  