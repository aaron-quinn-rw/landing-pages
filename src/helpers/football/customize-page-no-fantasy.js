import getFootballDefaults from '@/helpers/football/get-defaults-no-fantasy';

export default function customizeFootballPage(customizations) {
  const { feature: defaultFeature, draftKit: defaultDraftKit } =
    getFootballDefaults();
  const { feature: customFeature = {}, draftKit: customDraftKit = {} } =
    customizations;

  return {
    feature: { ...defaultFeature, ...customFeature },
    draftKit: { ...defaultDraftKit, ...customDraftKit },
  };
}
