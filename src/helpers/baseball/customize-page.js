import getBaseballDefaults from '@/helpers/baseball/get-defaults';

export default function customizeBaseballPage(customizations) {
  const { feature: defaultFeature, draftKit: defaultDraftKit } =
    getBaseballDefaults();
  const { feature: customFeature = {}, draftKit: customDraftKit = {} } =
    customizations;

  return {
    feature: { ...defaultFeature, ...customFeature },
    draftKit: { ...defaultDraftKit, ...customDraftKit },
  };
}
