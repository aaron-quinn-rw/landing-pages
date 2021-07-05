<template>
  <MainFeature
    :heading="heading"
    :subhead="subhead"
    :copy="copy"
    :button="button"
    :image="image"
  />
  <DraftKitFeatures />
  <AboutBlock />
</template>

<script setup>
import { defineProps } from 'vue';
import MainFeature from '@/components/MainFeature.vue';
import AboutBlock from '@/components/AboutBlock.vue';
import DraftKitFeatures from '@/components/DraftKitFeatures.vue';

const props = defineProps({
  image: { type: String },
  heading: { type: String },
  subhead: { type: String },
  copy: { type: String },
  button: { type: String },
  link: { type: String },
});
</script>
