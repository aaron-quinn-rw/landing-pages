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
    heading: `2024 Fantasy Baseball News & Rankings`,
    subhead:
      'Get the news that matters for your league without spending time hunting it down yourself.',
    copy: 'Get a real advantage over the rest of your league with our 24/7 news updates. Plus, rankings and advice customized for your league.',
    button: 'Win Your League This Year',
  },
});
</script>
