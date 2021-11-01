<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    class="bg-rw-dark-alt text-white border-rw-yellow border-solid border-t-4"
  >
    <div class="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="max-w-5xl">
        <div
          class="
            inline-flex
            flex-wrap
            sm:flex-nowrap
            px-6
            py-4
            rounded
            mb-6
            bg-rw-dark
          "
        >
          <div class="flex sm:inline-flex">
            <StarIcon
              v-for="starNum in 5"
              :key="starNum"
              class="h-4 w-4 mb-2 sm:mb-0 sm:h-6 sm:w-6 text-rw-yellow"
              aria-hidden="true"
            />
          </div>
          <div
            class="
              px-0
              sm:px-2
              text-sm
              sm:text-base
              font-light
              text-gray-200 text-md
            "
          >
            <span class="hidden sm:inline">&ndash; </span>"{{ quote }}"
          </div>
        </div>
        <h2 class="text-4xl sm:text-6xl font-extrabold text-blue-100 mb-2">
          {{ headline }}
        </h2>
        <p
          class="
            text-2xl
            sm:text-4xl
            font-light
            text-rw-highlight-dark
            leading-tight
            antialiased
          "
        >
          {{ subhead }}
        </p>
      </div>
      <dl
        class="
          mt-8
          sm:mt-12
          space-y-6
          sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10
          lg:gap-y-12 lg:grid-cols-4 lg:gap-x-8
          antialiased
        "
      >
        <div v-for="feature in features" :key="feature.name" class="relative">
          <dt>
            <LightningBoltIcon
              class="absolute h-6 w-6 text-rw-yellow"
              aria-hidden="true"
            />
            <p
              class="ml-9 text-lg sm:text-xl leading-6 font-semibold text-white"
            >
              {{ feature.name }}
            </p>
          </dt>
          <dd
            class="
              mt-1
              sm:mt-2
              ml-9
              text-sm
              sm:text-base
              font-light
              text-gray-300
            "
          >
            {{ feature.desc }}
          </dd>
        </div>
      </dl>

      <!-- eslint-disable vue/no-v-html -->
      <a
        :href="link"
        class="
          mt-6
          sm:mt-8
          lg:mt-12
          inline-flex
          items-center
          justify-center
          px-14
          py-4
          lg:py-5
          border border-transparent
          text-2xl
          lg:text-3xl
          font-light
          rounded-md
          shadow-xl
          text-white
          bg-rw-action
          hover:bg-rw-action-hover
        "
        v-html="button"
      >
      </a>
      <!-- eslint-enable -->
    </div>
  </div>
</template>

<script setup>
import { LightningBoltIcon, StarIcon } from '@heroicons/vue/solid';

const props = defineProps({
  headline: { type: String, required: true },
  subhead: { type: String, required: true },
  quote: { type: String, required: true },
  features: { type: Array, required: true },
  button: { type: String, required: true },
  link: { type: String, required: true },
});
</script>
