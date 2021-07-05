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
  heading: `The Best Fantasy Football Site`,
  subhead: 'Outsmart the rest of your league with our draft tools and advice',
  copy: "We have all the best fantasy football tools collected together in one place. It's the easiest way to become a champion.",
  button: 'Have Your Best Draft Ever',
};
</script>
