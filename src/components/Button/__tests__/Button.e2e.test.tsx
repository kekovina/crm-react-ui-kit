import React from 'react';

import { test } from '@crm-react-ui-kit-e2e/test';

import { prettyProps } from 'src/tests/e2e/utils';

import { ButtonPlaygroundItem, combinations } from './Button.e2e-playground';

test.describe('Button', () => {
  for (const props of combinations) {
    const label = prettyProps(props);

    test(
      label,
      async ({ mount, appearance, expectScreenshotClippedToContent }) => {
        await mount(
          <ButtonPlaygroundItem appearance={appearance} props={props} />
        );
        await expectScreenshotClippedToContent();
      }
    );
  }
});
