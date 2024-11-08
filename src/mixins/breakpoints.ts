import {Breakpoints} from '../constants/breakpoints';

export const mediaTablet = () =>
  `@media screen and (max-width: ${Breakpoints['834px']})` as const;

export const mediaPhone = () =>
  `@media screen and (max-width: ${Breakpoints['402px']})` as const;

export const mediaSize = (size: Breakpoints) =>
  `@media screen and (max-width: ${size})` as const;
