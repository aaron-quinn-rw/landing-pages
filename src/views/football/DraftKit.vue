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

<script></script>

<script setup>
import LandingPage from '@/components/LandingPage.vue';
import customizeFootballPage from '@/helpers/football/customize-page';

const { draftKit, feature } = customizeFootballPage({
  feature: {
    heading: `${new Date().getFullYear()} Fantasy Football Draft Kit`,
    subhead: 'Everything You Need To Win Your League',
    copy: "We have all the best fantasy football tools collected together in one place. It's the easiest way to become a champion.",
    button: 'Get Our Draft Kit Now',
  },
});
</script>
