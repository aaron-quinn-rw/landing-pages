import getHockeyDefaults from '@/helpers/hockey/get-defaults';

export default function customizeHockeyPage(customizations) {
  const { feature: defaultFeature, draftKit: defaultDraftKit } =
    getHockeyDefaults();
  const { feature: customFeature = {}, draftKit: customDraftKit = {} } =
    customizations;

  return {
    feature: { ...defaultFeature, ...customFeature },
    draftKit: { ...defaultDraftKit, ...customDraftKit },
  };
}
