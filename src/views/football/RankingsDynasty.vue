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
  heading: `${new Date().getFullYear()} Fantasy Football Dynasty Rankings`,
  subhead: 'Have Your Best Season Ever',
  copy: "Whether you're rebuilding or going for it all this season, we have the dynasty rankings you need to win.",
  button: 'Get Our Dynasty Rankings Now',
};
</script>
