import getFootballFeatures from '@/helpers/football/get-playoff-features';
import defaultImageFootball from '@/helpers/football/get-image';
import getDefaultCTALink from '@/helpers/football/get-cta-link';

export default function getFootballPlayoffDefaults() {
  const link = getDefaultCTALink();
  return {
    feature: {
      heading: '',
      subhead: '',
      copy: '',
      button: '',
      image: defaultImageFootball(),
      link,
    },
    draftKit: {
      features: getFootballFeatures(),
      button: `Get Our <span class="hidden sm:inline">&nbsp;Fantasy Football&nbsp;</span> Playoff Essentials`,
      headline: `Fantasy Football Playoff Essentials`,
      subhead: `Get everything you need to win your fantasy league.`,
      quote: `I found the quality of articles and research to be much higher than any of the competition`,
      link,
    },
  };
}
