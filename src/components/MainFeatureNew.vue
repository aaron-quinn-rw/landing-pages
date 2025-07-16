<template>
  <div class="relative">
    <div class="absolute inset-0 lg:h-full w-full">
      <img
        :src="image"
        :alt="heading"
        class="h-full w-full object-cover object-top lg:object-center opacity-25"
      />
    </div>
    <div class="
        pl-8
        pt-12
        relative
        ">
        <img
          class="lg:mb-4 w-48 sm:w-64"
          src="/primary_logo_purple_chalk_small.svg"
          alt="RotoWire"
        />
    </div>
    <div
      class="
        mx-auto
        max-w-8xl
        px-4
        
      "
    >
      <div
        class="
            relative 
            py-12  
            sm:pt-18 
            sm:pb-18 
            lg:col-start-1 
            lg:pb-20
        "
      >
        <p
          class="
            block
            font-extrabold
            uppercase
            text-3xl
            sm:text-4xl
            xl:text-6xl
            tracking-wide
            flex
            justify-center
            text-center
            font-integral
            pb-12
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
            xl:text-4xl
            text-gray-200
            antialiased
            flex
            justify-center
            font-molitor
          "
        >
          {{ subhead }}
        </p>
        <div class="flex justify-center">
          <p
            class="
              mt-3
              sm:mt-4
              sm:text-lg
              xl:text-xl
              font-semibold
              antialiased
              text-center
              font-cosmica
              max-w-3xl
            "
          >
            {{ copy }}
          </p>
        </div>

        <div class="
            inline-flex
            items-center
            justify-center
            w-full
        ">

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
                font-semibold
                font-cosmica
                rounded-md
                shadow-xl
                text-white
                bg-rw-purple
                hover:bg-rw-purple-hover
                ml-auto
                mr-auto
                z-10
            "
            >
            {{ button }}
            </a>
        </div>
        <div class="
            pl-8
            pt-12
            relative
            -ml-[125px]
            -mt-[110px]
            md:-ml-[150px]
            md:-mt-[145px]
            lg:-ml-[150px]
            lg:-mt-[230px]
            xl:-mt-[200px]
            xl:-ml-[40px]
            2xl:ml-[120px]
            2xl:-mt-[230px]
            ">
            <img
              class=" 
                hidden
                lg:block
                xl:block
              "
              src="/draft-kit-promo-desktop.svg"
              alt="RotoWire"
            />
            <img
              class=" 
                hidden
                md:block
                lg:hidden
              "
              src="/draft-kit-promo-tablet.svg"
              alt="RotoWire"
            />
            <img
              class=" 
                xs:block
                md:hidden
              "
              src="/draft-kit-promo-mobile.svg"
              alt="RotoWire"
            />
        </div>
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
