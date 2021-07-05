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
  heading: `${new Date().getFullYear()} Fantasy Football Rankings`,
  subhead: 'Customized to Fit Your Exact League',
  copy: "Don't settle for cookie-cutter rankings. Get a real advantage over the rest of your league with our customized rankings.",
  button: 'Get Custom Rankings Now',
};
</script>
