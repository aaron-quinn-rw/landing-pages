<template>
    <div>
      <div class="max-w-7xl mx-auto py-10 sm:py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <img
              class="mb-4 w-40 sm:w-48"
              src="/rotowire-logo-white.svg"
              alt="RotoWire"
              loading="lazy"
            />
            <p
              class="
                mt-3
                max-w-3xl
                text-lg
                sm:text-2xl
                text-gray-300
                antialiased
                font-light
              "
            >
              We have been the leader for sports news and player notes since 1997. Our quality has won us
              <b class="font-semibold">twice as many awards</b>
              for sports content compared to any other website in the industry.
            </p>
            <div class="mt-6 overflow-hidden">
              <dl class="-mx-8 -mt-6 flex flex-wrap">
                <div class="flex flex-col px-8 pt-6">
                  <dt class="order-1 text-base font-base text-gray-400">
                    People Using Our Site
                    <span class="text-xs text-gray-500 pl-1">(Monthly Avg)</span>
                  </dt>
                  <dd
                    class="
                      order-2
                      text-2xl
                      font-extrabold
                      text-rw-highlight
                      sm:text-3xl
                    "
                  >
                    1.25 Million
                  </dd>
                </div>
                <div class="flex flex-col px-8 pt-6">
                  <dt class="order-1 text-base font-base text-gray-400">
                    Industry Awards
                  </dt>
                  <dd
                    class="
                      order-2
                      text-2xl
                      font-extrabold
                      text-rw-highlight
                      sm:text-3xl
                    "
                  >
                    75+
                  </dd>
                </div>
              </dl>
            </div>
            <p
              class="
                mt-5
                max-w-3xl
                text-base
                sm:text-lg
                text-gray-300
                antialiased
                font-light
              "
            >
              In addition,
              <b class="font-semibold">
                more than 70 sports companies trust us
              </b>
              to provide them with quality news and information.
            </p>
          </div>
          <div>
            <p
              class="
                text-center text-xl
                font-light
                antialiased
                uppercase
                text-gray-400
                tracking-wide
                hidden
                lg:block
              "
            >
              You May Know Some Of Our Partners
            </p>
            <div
              class="
                mt-6
                grid grid-cols-2
                gap-2
                md:grid-cols-3
                lg:grid-cols-2 lg:px-6
              "
            >
              <div
                v-for="brand in brands"
                :key="brand.name"
                class="
                  bg-[#0f1c2a]
                  rounded-md
                  col-span-1
                  flex
                  justify-center
                  p-6
                  sm:p-10
                "
              >
                <img
                  class="w-auto max-h-8 self-center"
                  :class="`is-${brand.name.toLowerCase()}`"
                  :src="brand.logo"
                  :alt="brand.name"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const brands = [
    {
      name: 'ESPN',
      logo: '/espn.svg',
    },
    {
      name: 'Yahoo Sports',
      logo: '/yahoo.svg',
    },
    {
      name: 'FanDuel',
      logo: '/fanduel.svg',
    },
    {
      name: 'DraftKings',
      logo: '/draftkings.svg',
    },
  ];
  </script>
  
  <style scoped>
  .is-draftkings {
    max-height: 38px;
    margin: -5px 0 -3px;
  }
  </style>
  