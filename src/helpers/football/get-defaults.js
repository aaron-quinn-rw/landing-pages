import getFootballFeatures from '@/helpers/football/get-features';
import defaultImageFootball from '@/helpers/football/get-image';
import getDefaultCTALink from '@/helpers/football/get-cta-link';

export default function getFootballDefaults() {
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
      button: `Get Our <span class="hidden sm:inline">&nbsp;Fantasy Football&nbsp;</span> Draft Kit`,
      headline: `Fantasy Football Draft Kit`,
      subhead: `Get everything you need all in one place.`,
      quote: `I found the quality of articles and research to be much higher than any of the competition`,
      link,
    },
  };
}
