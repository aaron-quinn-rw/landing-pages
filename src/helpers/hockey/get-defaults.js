import getHockeyFeatures from '@/helpers/hockey/get-features';
import defaultImageHockey from '@/helpers/hockey/get-image';
import getDefaultCTALink from '@/helpers/hockey/get-cta-link';

export default function getHockeyDefaults() {
  const link = getDefaultCTALink();
  return {
    feature: {
      heading: '',
      subhead: '',
      copy: '',
      button: '',
      image: defaultImageHockey(),
      link,
    },
    draftKit: {
      features: getHockeyFeatures(),
      button: `Get Our <span class="hidden sm:inline">&nbsp;Fantasy Hockey&nbsp;</span> Draft Kit`,
      headline: `Fantasy Hockey Draft Kit`,
      subhead: `Get everything you need all in one place.`,
      quote: `I found the quality of articles and research to be much higher than any of the competition`,
      link,
    },
  };
}
