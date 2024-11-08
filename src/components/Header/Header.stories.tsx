import type {StoryFn} from '@storybook/react';

import {Header} from './Header';

export default {
  title: 'components/Header',
  component: Header,
};

export const Default: StoryFn = (args) => <Header {...args} />;

Default.args = {};
