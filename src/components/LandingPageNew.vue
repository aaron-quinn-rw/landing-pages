<template>
  <MainFeature
    :heading="featureHeading"
    :subhead="featureSubhead"
    :copy="featureCopy"
    :button="featureButton"
    :image="featureImage"
    :link="featureLink"
  />
  <DraftKit/>
  <FootballTools/>

  <!-- <AboutBlock /> -->
</template>

<script setup>
import MainFeature from '@/components/MainFeatureNew.vue';
import AboutBlock from '@/components/AboutBlock.vue';
import DraftKit from '@/components/FootballDraftKit.vue';
import FootballTools from '@/components/FootballTools.vue';

defineProps({
  // Main Feature
  featureImage: { type: String, required: true },
  featureHeading: { type: String, required: true },
  featureSubhead: { type: String, required: true },
  featureCopy: { type: String, required: true },
  featureButton: { type: String, required: true },
  featureLink: { type: String, required: true },
});
</script>
