import React from 'react';
import { Animated } from 'react-native';
import FAB from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('FAB Component', () => {
  it('render with theme', () => {
    const testTheme = {
      FAB: {
        placement: 'right',
      },
    };
    const { wrapper } = renderWithWrapper(
      <FAB placement="right" />,
      '',
      testTheme
    );
    expect(wrapper.findByType(Animated.View).props.style).toMatchObject({
      position: 'absolute',
      bottom: 0,
      right: 0,
    });
  });
});
