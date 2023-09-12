import getBasketballFeatures from '@/helpers/basketball/get-features';
import defaultImageBasketball from '@/helpers/basketball/get-image';
import getDefaultCTALink from '@/helpers/basketball/get-cta-link';

export default function getBasketballDefaults() {
  const link = getDefaultCTALink();
  return {
    feature: {
      heading: '',
      subhead: '',
      copy: '',
      button: '',
      image: defaultImageBasketball(),
      link,
    },
    draftKit: {
      features: getBasketballFeatures(),
      button: `Get Our <span class="hidden sm:inline">&nbsp;Fantasy Basketball&nbsp;</span> Draft Kit`,
      headline: `Fantasy Basketball Draft Kit`,
      subhead: `Get everything you need all in one place.`,
      quote: `I found the quality of articles and research to be much higher than any of the competition`,
      link,
    },
  };
}
