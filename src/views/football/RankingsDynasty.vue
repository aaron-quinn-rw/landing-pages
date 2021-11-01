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
import customizeFootballPage from '@/helpers/football/customize-page';

const { draftKit, feature } = customizeFootballPage({
  feature: {
    heading: `${new Date().getFullYear()} Fantasy Football Dynasty Rankings`,
    subhead: 'Have Your Best Season Ever',
    copy: "Whether you're rebuilding or going for it all this season, we have the dynasty rankings you need to win.",
    button: 'Get Our Dynasty Rankings Now',
  },
});
</script>
