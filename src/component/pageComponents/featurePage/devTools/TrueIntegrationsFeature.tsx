import React from 'react';
import {
  TextColumnText,
  TextColumnTitle,
} from '../../twoColumnSection/TextColumn';
import { FeatureHeader } from '../FeatureHeader';
import { SingleColumnSection } from '../../twoColumnSection/SingleColumnSection';
import { TechnologyIcons } from '../../../TechnologyIcons';

export function TolgeeIsRealTexts() {
  return (
    <>
      <TextColumnTitle>Tolgee is real</TextColumnTitle>
      <TextColumnText>
        Tolgee is not just other localization platform offering integrations
        which are just syncing you local data with the backend. Tolgee is really
        integrated into your App via SDKs.
      </TextColumnText>
    </>
  );
}

export const TrueIntegrationsFeature = () => {
  return (
    <>
      <FeatureHeader title="True integrations" id="true-integrations" />
      <SingleColumnSection>
        <TolgeeIsRealTexts />
        <TechnologyIcons className="justify-center" />
      </SingleColumnSection>
    </>
  );
};