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
  heading: `${new Date().getFullYear()} Fantasy Football Mock Draft Simulator`,
  subhead: 'Test any draft strategy. Draft from every slot. Customize it all.',
  copy: "Use our mock draft simulator to prepare for your draft. It's the most entertaining way to battle test your draft strategy.",
  button: 'Have Your Best Draft Ever',
};

if (new Date().getFullYear() === 2021) {
  info.image = 'https://content.rotowire.com/images/nfl-mock-draft-tool.jpg';
}
</script>
