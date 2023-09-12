import getBasketballDefaults from '@/helpers/basketball/get-defaults';

export default function customizeBasketballPage(customizations) {
  const { feature: defaultFeature, draftKit: defaultDraftKit } =
    getBasketballDefaults();
  const { feature: customFeature = {}, draftKit: customDraftKit = {} } =
    customizations;

  return {
    feature: { ...defaultFeature, ...customFeature },
    draftKit: { ...defaultDraftKit, ...customDraftKit },
  };
}
