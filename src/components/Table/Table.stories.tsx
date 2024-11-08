import type {StoryFn} from '@storybook/react';

import {Table} from './Table';

export default {
  title: 'components/Table',
  component: Table,
};

export const Default: StoryFn = (args) => <Table {...args} />;

Default.args = {};
