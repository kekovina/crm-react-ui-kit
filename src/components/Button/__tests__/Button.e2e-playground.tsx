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

export const combinations = multiCartesian<ButtonProps>([
  {
    isLoading: [true, false],
    isDisabled: [true, false],
    theme: [ButtonNeutralTheme, ButtonPrimaryTheme, ButtonSecondaryTheme],
  },
  {
    before: [IconsMap.CalendarIcon, undefined],
    after: [IconsMap.CopyIcon, undefined],
    theme: [ButtonNeutralTheme, ButtonPrimaryTheme, ButtonSecondaryTheme],
  },
]);

export const ButtonPlaygroundItem = ({
  appearance,
  props,
}: ComponentPlaygroundItemProps<ButtonProps>) => (
  <ComponentPlaygroundItem<ButtonProps> appearance={appearance} props={props}>
    {(p) => <Button {...p}>Button</Button>}
  </ComponentPlaygroundItem>
);
