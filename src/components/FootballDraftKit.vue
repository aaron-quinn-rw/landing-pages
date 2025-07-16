<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white relative">
    <div class="h-full w-full top-0 lg:inset-0">
        <img
            class="
                h-full
                w-full
                object-cover
                z-0
                absolute
            "
            src="/bg-fade-to-black.svg"
            alt="heading"
        />
    </div>
    <!-- Bottom Gradient Overlay -->
    <div class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none"></div>
    <div class="h-full w-full z-10 relative">
        <p
        class="
            block
            text-3xl
            sm:text-4xl
            xl:text-[3rem]
            tracking-wide
            flex
            justify-center
            text-center
            font-integral
            py-12
            text-[#333334]
        "
        >
        Popular Draft Kit Tools
        </p>
    </div>
    <div
      class="
        relative
        z-10
        max-w-4xl
        mx-auto
        px-4
        sm:px-6
        lg:max-w-7xl
        lg:px-0
        grid
        grid-cols-1
        md:grid-cols-2
        md:gap-x-16
        mb-10
      "
    >
        <div
            class="order-2 md:order-1 relative pb-12 sm:pt-18 sm:pb-18 lg:col-start-1 lg:pb-20"
        >
            <img
            class="h-full w-full"
            src="/draft-kit-example-01.svg"
            alt="RotoWire"
            />
        </div>
        <div class="order-1 md:order-2 relative pb-12 sm:pt-18 sm:pb-18 lg:col-start-2 lg:pb-20 flex flex-col justify-center">
            <p class="text-[#1c1c1a] font-integral text-[1.25rem] lg:text-[2.25rem] leading-[1.5]">Create your own draft assistant strategy</p>
            <p class="text-[#1c1c1a] font-cosmica font-bold text-[1rem] lg:text-[1.5em]">Draft Assistant</p>
            <p class="text-[#1c1c1a] font-cosmica font-semibold text-[0.75rem] lg:text-[1.125em]">Use our draft assistant to follow along with your draft and make the best decisions for your team</p>
            <a
            href="https://www.rotowire.com/subscribe/create-account.php"
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
                mr-auto
            "
            >
            Start a Draft
            </a>
        </div>
        <!-- Start of example 2-->
        <div class="order-3 md:order-3 relative pb-12 sm:pt-18 sm:pb-18 lg:col-start-1 lg:pb-20 flex flex-col justify-center">
            <p class="text-[#1c1c1a] font-integral text-[1.25rem] lg:text-[2.25rem] leading-[1.5]">Try Our Unlimited Simulations</p>
            <p class="text-[#1c1c1a] font-cosmica font-bold text-[1rem] lg:text-[1.5em]">Mock Simulator</p>
            <p class="text-[#1c1c1a] font-cosmica font-semibold text-[0.75rem] lg:text-[1.125em]">Prep for your 2025 Fantasy Football draft with free, unlimited simulations and hundreds of draft strategies</p>
            <a
            href="https://www.rotowire.com/football/mock-draft/"
            class="
                mt-5
                inline-flex
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
                mr-auto
            "
            >
            Try For Free Now
            </a>
        </div>
        <div
            class="order-4 md:order-4 relative pb-12 sm:pt-18 sm:pb-18 lg:col-start-2 lg:pb-20"
        >
            <img
            class="mb-4 w-full"
            src="/draft-kit-example-02.svg"
            alt="RotoWire"
            />
        </div>
        <!-- Start of Example 3-->
         <div
            class="order-6 md:order-5 relative pb-12 sm:pt-18 sm:pb-18 lg:col-start-1 lg:pb-20"
        >
            <img
            class="h-full w-full"
            src="/draft-kit-example-03.svg"
            alt="RotoWire"
            />
        </div>
        <div class="order-5 md:order-6 relative pb-12 sm:pt-18 sm:pb-18 lg:col-start-2 lg:pb-20 flex flex-col justify-center">
            <p class="text-[#1c1c1a] font-integral text-[1.25rem] lg:text-[2.25rem] leading-[1.5]">Guide your team through all injuries and bye weeks</p>
            <p class="text-[#1c1c1a] font-cosmica font-bold text-[1rem] lg:text-[1.5em]">Custom Rankings</p>
            <p class="text-[#1c1c1a] font-cosmica font-semibold text-[0.75rem] lg:text-[1.125em]">Custom player rankings for your league with projected stats</p>
            <a
            href="https://www.rotowire.com/football/cheatsheet.php"
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
                mr-auto
            "
            >
            Try For Free Now
            </a>
        </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  headline: { type: String, required: true },
  subhead: { type: String, required: true },
  quote: { type: String, required: true },
  features: { type: Array, required: true },
  button: { type: String, required: true },
  link: { type: String, required: true },
});
</script>
