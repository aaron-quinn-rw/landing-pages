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
    heading: `${new Date().getFullYear()} Fantasy Baseball Tips & Tricks`,
    subhead: 'Outsmart the rest of your league with our draft tools and advice',
    copy: "We have all the best fantasy baseball tools collected together in one place. It's the easiest way to become a champion.",
    button: 'Have Your Best Draft Ever',
  },
});
</script>
