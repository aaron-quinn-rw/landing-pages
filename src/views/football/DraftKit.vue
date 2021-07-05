<template>
  <LandingPage
    :heading="info.heading"
    :subhead="info.subhead"
    :copy="info.copy"
    :button="info.button"
    :image="info.image"
  />
</template>

<script setup>
import LandingPage from '@/components/LandingPage.vue';

const info = {
  heading: `${new Date().getFullYear()} Fantasy Football Draft Kit`,
  subhead: 'Everything You Need To Win Your League',
  copy: "We have all the best fantasy football tools collected together in one place. It's the easiest way to become a champion.",
  button: 'Get Our Draft Kit Now',
};
</script>
