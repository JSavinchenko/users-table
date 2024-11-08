import type {TextProps} from './Text.types';
import type {StoryFn} from '@storybook/react';
import {Text} from './Text';
import {TextStyles, TextTags} from './Text.types';

export default {
  title: 'UI/Text',
  component: Text,
};

export const Header: StoryFn<TextProps> = (args) => (
  <Text {...args}>User To-Do Table</Text>
);

Header.args = {
  type: TextStyles.HEADER,
  as: TextTags.DIV,
};

export const Small_header: StoryFn<TextProps> = (args) => (
  <Text {...args}>User task table for effective planning.</Text>
);

Small_header.args = {
  type: TextStyles.SMALL_HEADER,
  as: TextTags.DIV,
};

export const Table_header: StoryFn<TextProps> = (args) => (
  <Text {...args}>USERNAME</Text>
);

Table_header.args = {
  type: TextStyles.TABLE_HEADER,
  as: TextTags.DIV,
};

export const Table_main: StoryFn<TextProps> = (args) => (
  <Text {...args}>Ethan Mitchell</Text>
);

Table_main.args = {
  type: TextStyles.TABLE_MAIN,
  as: TextTags.DIV,
};

export const Small: StoryFn<TextProps> = (args) => (
  <Text {...args}>example@example.com</Text>
);

Small.args = {
  type: TextStyles.SMALL,
  as: TextTags.DIV,
};
