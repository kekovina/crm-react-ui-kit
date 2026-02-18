import React from 'react';

import { test } from '@crm-react-ui-kit-e2e/test';

import { prettyProps } from 'src/tests/e2e/utils';

import {
  ButtonNeutralPlaygroundItem,
  ButtonPrimaryPlaygroundItem,
  ButtonSecondaryPlaygroundItem,
  combinations,
} from './Button.e2e-playground';

for (const props of combinations) {
  const label = prettyProps(props);

  test.describe('Button Neutral', () => {
    test(
      label,
      async ({ mount, appearance, expectScreenshotClippedToContent }) => {
        await mount(
          <ButtonNeutralPlaygroundItem appearance={appearance} props={props} />
        );
        await expectScreenshotClippedToContent();
      }
    );
  });

  test.describe('Button Primary', () => {
    test(
      label,
      async ({ mount, appearance, expectScreenshotClippedToContent }) => {
        await mount(
          <ButtonPrimaryPlaygroundItem appearance={appearance} props={props} />
        );
        await expectScreenshotClippedToContent();
      }
    );
  });

  test.describe('Button Secondary', () => {
    test(
      label,
      async ({ mount, appearance, expectScreenshotClippedToContent }) => {
        await mount(
          <ButtonSecondaryPlaygroundItem
            appearance={appearance}
            props={props}
          />
        );
        await expectScreenshotClippedToContent();
      }
    );
  });
}
