<template>
    <TwentyPercentFeatureDiscount
      :heading="featureHeading"
      :subhead="featureSubhead"
      :copy="featureCopy"
      :button="featureButton"
      :image="featureImage"
      :link="featureLink"
    />
    <DraftKit
      :headline="draftKitHeadline"
      :subhead="draftKitSubhead"
      :quote="draftKitQuote"
      :features="draftKitFeatures"
      :link="draftKitLink"
      :button="draftKitButton"
    />
    <AboutBlock />
  </template>
  
  <script setup>
  import TwentyPercentFeatureDiscount from '@/components/TwentyPercentFeatureDiscount.vue';
  import AboutBlock from '@/components/AboutBlock.vue';
  import DraftKit from '@/components/DraftKit.vue';
  
  defineProps({
    // Main Feature
    featureImage: { type: String, required: true },
    featureHeading: { type: String, required: true },
    featureSubhead: { type: String, required: true },
    featureCopy: { type: String, required: true },
    featureButton: { type: String, required: true },
    featureLink: { type: String, required: true },
  
    // Draft Kit
    draftKitFeatures: { type: Array, required: true },
    draftKitButton: { type: String, required: true },
    draftKitHeadline: { type: String, required: true },
    draftKitSubhead: { type: String, required: true },
    draftKitQuote: { type: String, required: true },
    draftKitLink: { type: String, required: true },
  });
  </script>
  