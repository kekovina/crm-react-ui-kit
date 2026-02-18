import React from 'react';

import {
  ComponentPlaygroundItem,
  ComponentPlaygroundProps,
} from 'src/tests/e2e/ComponentPlayground';

import { IconsMap } from '@storybook-utils/constants';

import { multiCartesian } from 'src/tests/e2e/utils';

import {
  Button,
  ButtonNeutralTheme,
  ButtonPrimaryTheme,
  ButtonSecondaryTheme,
  type ButtonProps,
} from '..';

const defaultCombinations = multiCartesian<ButtonProps>([
  { isLoading: [true, false], isDisabled: [true, false] },
]);

const iconsCombinations = multiCartesian<ButtonProps>([
  {
    before: [IconsMap.CalendarIcon, undefined],
    after: [IconsMap.CopyIcon, undefined],
  },
]);

const combinations = [...defaultCombinations, ...iconsCombinations];

export const ButtonNeutralPlayground = ({
  appearance,
}: ComponentPlaygroundProps<ButtonProps>) => (
  <>
    {combinations.map((itemProps, i) => (
      <ComponentPlaygroundItem<ButtonProps>
        key={i}
        appearance={appearance}
        props={itemProps}
      >
        {(p) => (
          <Button {...p} theme={ButtonNeutralTheme}>
            Button
          </Button>
        )}
      </ComponentPlaygroundItem>
    ))}
  </>
);

export const ButtonPrimaryPlayground = ({
  appearance,
}: ComponentPlaygroundProps<ButtonProps>) => (
  <>
    {combinations.map((itemProps, i) => (
      <ComponentPlaygroundItem<ButtonProps>
        key={i}
        appearance={appearance}
        props={itemProps}
      >
        {(p) => (
          <Button {...p} theme={ButtonPrimaryTheme}>
            Button
          </Button>
        )}
      </ComponentPlaygroundItem>
    ))}
  </>
);

export const ButtonSecondaryPlayground = ({
  appearance,
}: ComponentPlaygroundProps<ButtonProps>) => (
  <>
    {combinations.map((itemProps, i) => (
      <ComponentPlaygroundItem<ButtonProps>
        key={i}
        appearance={appearance}
        props={itemProps}
      >
        {(p) => (
          <Button {...p} theme={ButtonSecondaryTheme}>
            Button
          </Button>
        )}
      </ComponentPlaygroundItem>
    ))}
  </>
);
