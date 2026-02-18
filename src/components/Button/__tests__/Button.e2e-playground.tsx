import React from 'react';

import {
  ComponentPlaygroundItem,
  ComponentPlaygroundItemProps,
} from 'src/tests/e2e/ComponentPlayground';

import { multiCartesian } from 'src/tests/e2e/utils';

import { IconsMap } from '@storybook-utils/constants';

import {
  Button,
  ButtonNeutralTheme,
  ButtonPrimaryTheme,
  ButtonSecondaryTheme,
  type ButtonProps,
} from '..';

export const combinations: ButtonProps[] = [
  ...multiCartesian<ButtonProps>([
    { isLoading: [true, false], isDisabled: [true, false] },
  ]),
  ...multiCartesian<ButtonProps>([
    {
      before: [IconsMap.CalendarIcon, undefined],
      after: [IconsMap.CopyIcon, undefined],
    },
  ]),
];

export const ButtonNeutralPlaygroundItem = ({
  appearance,
  props,
}: ComponentPlaygroundItemProps<ButtonProps>) => (
  <ComponentPlaygroundItem<ButtonProps> appearance={appearance} props={props}>
    {(p) => (
      <Button {...p} theme={ButtonNeutralTheme}>
        Button
      </Button>
    )}
  </ComponentPlaygroundItem>
);

export const ButtonPrimaryPlaygroundItem = ({
  appearance,
  props,
}: ComponentPlaygroundItemProps<ButtonProps>) => (
  <ComponentPlaygroundItem<ButtonProps> appearance={appearance} props={props}>
    {(p) => (
      <Button {...p} theme={ButtonPrimaryTheme}>
        Button
      </Button>
    )}
  </ComponentPlaygroundItem>
);

export const ButtonSecondaryPlaygroundItem = ({
  appearance,
  props,
}: ComponentPlaygroundItemProps<ButtonProps>) => (
  <ComponentPlaygroundItem<ButtonProps> appearance={appearance} props={props}>
    {(p) => (
      <Button {...p} theme={ButtonSecondaryTheme}>
        Button
      </Button>
    )}
  </ComponentPlaygroundItem>
);
