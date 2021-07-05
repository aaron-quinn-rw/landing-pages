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
  heading: `${new Date().getFullYear()} Fantasy Football News & Rankings`,
  subhead:
    'Get the news that matters for your league without spending time hunting it down yourself.',
  copy: 'Get a real advantage over the rest of your league with our 24/7 news updates. Plus, rankings and advice customized for your league.',
  button: 'Win Your League This Year',
};
</script>
