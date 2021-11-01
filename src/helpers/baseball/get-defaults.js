import getBaseballFeatures from '@/helpers/baseball/get-features';
import defaultImageBaseball from '@/helpers/baseball/get-image';
import getDefaultCTALink from '@/helpers/baseball/get-cta-link';

export default function getBaseballDefaults() {
  const link = getDefaultCTALink();
  return {
    feature: {
      heading: '',
      subhead: '',
      copy: '',
      button: '',
      image: defaultImageBaseball(),
      link,
    },
    draftKit: {
      features: getBaseballFeatures(),
      button: `Get Our <span class="hidden sm:inline">&nbsp;Fantasy Baseball&nbsp;</span> Draft Kit`,
      headline: `Fantasy Baseball Draft Kit`,
      subhead: `Get everything you need all in one place.`,
      quote: `I found the quality of articles and research to be much higher than any of the competition`,
      link,
    },
  };
}
