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
          items-center
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
        <div class="mb-10">
          <div
            class="
              w-full
              subscription-plans
              mt-0
              space-y-4
              sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-6 sm:space-y-0
              lg:mx-auto
              lg:grid-cols-2
              lg:gap-4
              lg:first-line:max-w-none
              lg:mr-[-10px]
              lg:mb-0
              relative
              h-[fit-content]
            "
          >
            <div
              class="
                subscription-plan
                divide-y divide-gray-200
                rounded-md
                border border-gray-200
                shadow-xl
                bg-white
              "
              data-all="0"
              data-dfs="1"
            >
              <div class="px-4 pt-6 pb-4 md:px-6">
                <h2 class="text-xl font-normal text-gray-800 xl:text-2xl">
                  Baseball + DFS
                </h2>
  
                <p class="subscription-plan__desc mt-4 text-sm text-gray-500">
                  All fantasy baseball tools including our MLB DFS optimizer.
                </p>
                <p class="mt-2 md:mt-4">
                  <span
                    class="
                      text-2xl
                      font-normal
                      text-gray-500
                      md:text-4xl
                      mr-3
                      strikethrough-diagonal
                    "
                    >$<span class="subscription-plan__dollars">8</span>
                    <span
                      class="
                        align-super
                        text-xs
                        font-normal
                        text-gray-400
                        md:text-sm
                      "
                      >.<span class="subscription-plan__cents">99</span></span
                    ></span
                  >
                  <span class="text-2xl font-normal text-gray-800 md:text-4xl"
                    >$<span class="subscription-plan__dollars">7</span>
                    <span
                      class="
                        align-super
                        text-xs
                        font-normal
                        text-gray-600
                        md:text-sm
                      "
                      >.<span class="subscription-plan__cents">19</span></span
                    ></span
                  >
                  <span
                    class="text-sm font-normal text-gray-500 ml-1 md:text-base"
                    >/month</span
                  >
                </p>
                <a
                  href="https://www.rotowire.com/subscribe/redeem.php?code=DFS20"
                  class="
                    go-to-payment-screen
                    mt-3
                    block
                    w-full
                    rounded-md
                    border border-emerald-600
                    bg-emerald-600
                    py-4
                    text-center text-base
                    font-bold
                    text-emerald-50
                    hover:bg-emerald-700
                    md:mt-6 md:py-3
                    xl:text-base
                  "
                >
                  Get MLB + DFS
                </a>
              </div>
            </div>
  
            <div
              class="
                subscription-plan
                divide-y divide-gray-200
                rounded-md
                border border-gray-200
                shadow-xl
                bg-white
              "
              data-all="1"
              data-dfs="1"
            >
              <div class="px-4 pt-4 pb-4 md:px-6 md:pt-6">
                <h2 class="text-xl font-normal text-gray-800 xl:text-2xl">
                  All Sports + DFS
                </h2>
                <p class="mt-4 text-sm text-gray-500">
                  Get all tools for every sport including our DFS optimizer.
                </p>
                <p class="mt-2 md:mt-4">
                  <span
                    class="
                      text-2xl
                      font-normal
                      text-gray-500
                      md:text-4xl
                      mr-3
                      strikethrough-diagonal
                    "
                    >$<span class="subscription-plan__dollars">11</span>
                    <span
                      class="
                        align-super
                        text-xs
                        font-normal
                        text-gray-400
                        md:text-sm
                      "
                      >.<span class="subscription-plan__cents">99</span></span
                    ></span
                  >
                  <span class="text-2xl font-normal text-gray-800 md:text-4xl"
                    >$<span class="subscription-plan__dollars">9</span>
                    <span
                      class="
                        align-super
                        text-xs
                        font-normal
                        text-gray-600
                        md:text-sm
                      "
                      >.<span class="subscription-plan__cents">59</span></span
                    ></span
                  >
                  <span
                    class="text-sm font-normal text-gray-500 ml-1 md:text-base"
                    >/month</span
                  >
                </p>
                <a
                  href="https://www.rotowire.com/subscribe/redeem.php?code=DFS20"
                  class="
                    go-to-payment-screen
                    mt-3
                    block
                    w-full
                    rounded-md
                    border border-emerald-600
                    bg-emerald-600
                    py-4
                    text-center text-base
                    font-bold
                    text-emerald-50
                    hover:bg-emerald-700
                    md:mt-6 md:py-3
                    xl:text-base
                  "
                >
                  Get All Sports + DFS
                </a>
              </div>
            </div>
          </div>
          <div class="text-center mt-4 lg:mr-[-10px] relative">
            <a
              class="underline text-xl font-semibold antialiased"
              href="https://www.rotowire.com/subscribe/redeem.php?code=DFS20"
              >View All Packages</a
            >
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
  
  <style scoped>
  .strikethrough-diagonal {
    position: relative;
  }
  .strikethrough-diagonal:before {
    position: absolute;
    content: '';
    left: 0;
    top: 45%;
    right: 0;
    border-top: 4px solid;
    border-color: red;
    -webkit-transform: skewY(-10deg);
    -moz-transform: skewY(-10deg);
    transform: skewY(-10deg);
  }
  </style>
  