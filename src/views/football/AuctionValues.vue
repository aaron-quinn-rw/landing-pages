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
  heading: `${new Date().getFullYear()} Fantasy Football Auction Values`,
  subhead: 'Customized to Fit Your Exact League',
  copy: 'Auction drafts can be a real challenge. Get an advantage over the rest of your league with our customized auction values.',
  button: 'Make All The Right Bids',
};
</script>
