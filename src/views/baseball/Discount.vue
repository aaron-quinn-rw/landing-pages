<template>
  <LandingPageDiscount
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
import LandingPageDiscount from '@/components/LandingPageDiscount.vue';
import customizeBaseballPage from '@/helpers/baseball/customize-page';

const { draftKit, feature } = customizeBaseballPage({
  feature: {
    heading: `2024 Fantasy Baseball Draft Kit`,
    subhead: 'Everything You Need To Win Your League',
    copy: "We have all the best fantasy baseball tools collected together in one place. It's the easiest way to become a champion.",
    button: 'Get Our Draft Kit Now',
    link: 'https://www.rotowire.com/subscribe/redeem.php?code=ANNUAL10',
  },
  draftKit: {
    headline: 'Why Choose RotoWire?',
    link: 'https://www.rotowire.com/subscribe/redeem.php?code=ANNUAL10',
  },
});
</script>
