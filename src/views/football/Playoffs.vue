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
  import customizeFootballPage from '@/helpers/football/customize-playoffs';
  
  const { draftKit, feature } = customizeFootballPage({
    feature: {
      heading: `${new Date().getFullYear()} Fantasy Football Playoff Tools`,
      subhead: 'Maximize Your Roster',
      copy: `When it's crunch time for your fantasy league, every decision counts. Use our premium tools to secure your playoff spot.`,
      button: 'Make Your Playoff Push',
    },
  });
  </script>
  