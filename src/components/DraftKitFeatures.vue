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
            <span class="hidden sm:inline">&ndash; </span>"I found the quality
            of articles and research to be much higher than any of the
            competition"
          </div>
        </div>
        <h2 class="text-4xl sm:text-6xl font-extrabold text-blue-100 mb-2">
          Fantasy Football Draft&nbsp;Kit
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
          Get everything you need all in one&nbsp;place.
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

      <a
        href="https://www.rotowire.com/subscribe/"
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
      >
        Get Our
        <span class="hidden sm:inline">&nbsp;Fantasy Football&nbsp;</span>
        Draft Kit
      </a>
    </div>
  </div>
</template>

<script setup>
import { LightningBoltIcon, StarIcon } from '@heroicons/vue/solid';

const features = [
  {
    name: 'Cheat Sheets',
    desc: 'A quick way to see our rankings and projected stats at a glance.',
  },
  {
    name: 'Draft Software',
    desc: 'Draft software packed with features and available both for Windows and Mac.',
  },
  {
    name: 'Custom Rankings',
    desc: 'Custom player rankings for your league with projected stats.',
  },
  {
    name: 'Mock Draft Simulator',
    desc: 'Practice unlimited draft strategies with our mock draft simulator.',
  },
  {
    name: 'Auction Values',
    desc: 'Get custom dollar values based on your specific league scoring system.',
  },
  {
    name: 'Top Rookies',
    desc: "We've ranked the rookies you should be paying attention to in your draft.",
  },
  {
    name: 'Projections',
    desc: 'We have projected stats for every player you care about.',
  },
  {
    name: 'Sleepers',
    desc: 'Check out our list of under-valued players this season.',
  },
  {
    name: 'Strength of Schedule',
    desc: 'See which players have the easiest schedules this year.',
  },
  {
    name: 'PPR Rankings',
    desc: 'PPR rankings with player profiles and projections.',
  },
  {
    name: 'ADP Reports',
    desc: 'Spot trends like a pro with our Average Draft Position (ADP) reports.',
  },
  {
    name: 'News',
    desc: 'You can rely on our fast, high quality fantasy football news updates.',
  },
  {
    name: 'IDP Rankings',
    desc: 'We have IDP rankings that you can customize to fit your league.',
  },
  {
    name: 'Depth Charts',
    desc: 'Go into your draft knowing who is going to get playing time this season.',
  },
  {
    name: 'Ask An Expert',
    desc: 'Get answers to your fantasy football questions from our team of experts.',
  },
  {
    name: 'Fantasy Outlooks',
    desc: 'Read our in-depth profiles of hundreds of players to consider during your draft.',
  },
  {
    name: 'Red Zone Stats',
    desc: "Stats you can use to target players who'll get the ball near the goal line.",
  },
  {
    name: 'Air Yards Stats',
    desc: 'Air yards and stats like average depth of target give you more tools to analyze pass catchers.',
  },
  {
    name: 'Targets Breakdown',
    desc: 'See a week-by-week view of which WR, RB and TE are getting targeted and how often.',
  },
  {
    name: 'Advanced NFL Stats',
    desc: 'Dive into our advanced passing, rushing and receiving stats.',
  },
  {
    name: 'Dynasty Rankings',
    desc: 'Our list of the top players to draft in dynasty leagues.',
  },
  {
    name: 'Devy Rankings',
    desc: 'The best college players to draft in fantasy football devy leagues.',
  },
  {
    name: 'Advice & Draft Strategy',
    desc: 'Learn how to be better at fantasy football with our draft advice and strategy.',
  },
  {
    name: 'Draft Grades',
    desc: "Our My Leagues feature will analyze your draft and give you a grade on it when it's over.",
  },
  {
    name: 'Receiver Alignment Stats',
    desc: 'See where players line up (slot/outside, etc) and how they perform at each spot.',
  },
  {
    name: 'TE Route Running Stats',
    desc: 'Find tight ends to target by looking at how often they go out for a route.',
  },
  {
    name: 'Advanced Split Stats',
    desc: 'See how players perform in different scenarios (home/away, warm/cold weather, etc).',
  },
  {
    name: 'Offensive Line Rankings',
    desc: 'If you want an edge, you have to go deep. Check out our offensive line rankings.',
  },
  {
    name: 'IDP Pass Defense Stats',
    desc: 'See which defensive players are the best (and worst) at defending the pass.',
  },
  {
    name: 'Team Previews',
    desc: 'Check out our fantasy football previews for each team.',
  },
  {
    name: 'Snap Counts',
    desc: "You can't score any points if you're not on the field. See which players are getting snaps.",
  },
  {
    name: 'Articles',
    desc: 'Our fantasy football experts publish new fantasy football content all the time.',
  },
];
</script>
