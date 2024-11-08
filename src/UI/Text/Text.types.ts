import type {ReactNode} from 'react';
import type {CSSProperties} from 'styled-components';
//import {Breakpoints} from '../../constants/breakpoints';

export enum TextFonts {
  INTER = 'Inter, sans-serif',
}

export enum TextStyles {
  HEADER = 'HEADER',
  SMALL_HEADER = 'SMALL_HEADER',
  TABLE_HEADER = 'TABLE_HEADER',
  TABLE_MAIN = 'TABLE_MAIN',
  SMALL = 'EMAIL',
}

export enum TextTags {
  'DIV' = 'div',
  'P' = 'p',
}

export interface TextProps {
  as?: TextTags;
  children: ReactNode;
  className?: string;
  type: TextStyles;
  textFont?: TextFonts;
  fontStyle?: CSSProperties['fontStyle'];
  size?: number;
  fontWeight?: CSSProperties['fontWeight'];
  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: CSSProperties['textAlign'];
  textDecoration?: CSSProperties['textDecoration'];
  mobileType?: TextStyles;
  //mobileBreakpoint?: Breakpoints;
}
