<template>
  <div class="relative">
    <div class="h-80 w-full absolute top-0 lg:inset-0 lg:h-full">
      <div class="h-full w-full lg:grid lg:grid-cols-2">
        <div class="h-40 sm:h-60 lg:h-full relative lg:col-start-2">
          <img
            class="
              h-40
              sm:h-60
              lg:h-full
              w-full
              object-cover object-top
              lg:object-center
              opacity-25
              lg:absolute lg:inset-0
            "
            :src="image"
            :alt="heading"
          />
          <div
            aria-hidden="true"
            class="
              absolute
              inset-x-0
              bottom-0
              h-32
              bg-gradient-to-t
              from-rw-dark
              lg:inset-y-0 lg:left-0 lg:h-full lg:w-32 lg:bg-gradient-to-r
            "
          />
        </div>
      </div>
    </div>
    <div
      class="
        max-w-4xl
        mx-auto
        px-4
        sm:px-6
        lg:max-w-7xl
        lg:px-8
        lg:grid
        lg:grid-cols-2
        lg:grid-flow-col-dense
        lg:gap-x-8
      "
    >
      <div
        class="relative pt-12 pb-12 sm:pt-18 sm:pb-18 lg:col-start-1 lg:pb-20"
      >
        <img
          class="mb-4 w-48 sm:w-64"
          src="/rotowire-logo-white.svg"
          alt="RotoWire"
        />

        <p
          class="
            block
            text-rw-yellow
            font-extrabold
            italic
            uppercase
            text-3xl
            sm:text-4xl
            xl:text-headline
            tracking-wide
          "
        >
          {{ heading }}
        </p>
        <p
          class="
            mt-2
            sm:mt-3
            text-xl
            sm:text-2xl
            xl:text-3xl
            font-semibold
            text-gray-200
            antialiased
          "
        >
          {{ subhead }}
        </p>
        <p
          class="
            mt-3
            sm:mt-4
            text-base
            sm:text-lg
            xl:text-xl
            text-gray-300
            font-light
            antialiased
          "
        >
          {{ copy }}
        </p>

        <a
          :href="link"
          class="
            mt-5
            inline-flex
            items-center
            justify-center
            px-10
            py-2
            sm:py-3
            border border-transparent
            text-lg
            sm:text-xl
            font-light
            rounded-md
            shadow-xl
            text-white
            bg-rw-action
            hover:bg-rw-action-hover
          "
        >
          {{ button }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: { type: String, required: true },
  heading: { type: String, required: true },
  subhead: { type: String, required: true },
  copy: { type: String, required: true },
  button: { type: String, required: true },
  link: { type: String, required: true },
});
</script>
