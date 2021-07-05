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
  heading: `${new Date().getFullYear()} Fantasy Football Cheat Sheet`,
  subhead: 'Customized to Fit Your Exact League',
  copy: 'Get a real advantage over the rest of your league with our customized rankings.',
  button: 'Get Your Custom Cheat Sheet',
};
</script>
