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
    heading: `2024 Fantasy Baseball Auction Values`,
    subhead: 'Customized to Fit Your Exact League',
    copy: 'Auction drafts can be a real challenge. Get an advantage over the rest of your league with our customized auction values.',
    button: 'Make All The Right Bids',
  },
});
</script>
