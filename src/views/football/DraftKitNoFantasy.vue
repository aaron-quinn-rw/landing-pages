<template>
    <LandingPageNoFantasy
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
    <AboutBlockNoFantasy />
  </template>
  
  <script setup>
  import LandingPageNoFantasy from '@/components/LandingPageNoFantasy.vue';
  import customizeFootballPage from '@/helpers/football/customize-page-no-fantasy';
  
  const { draftKit, feature } = customizeFootballPage({
    feature: {
      heading: `${new Date().getFullYear()} Football Draft Kit`,
      subhead: 'Everything You Need To Win Your League',
      copy: "We have all the best football tools collected together in one place. It's the easiest way to become a champion.",
      button: 'Get Our Draft Kit Now',
    },
  });
  </script>
  