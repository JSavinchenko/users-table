import type {TextProps} from './Text.types';
import styled from 'styled-components';
import {getTextStyles} from './Text.utils';
//import {mediaSize, mediaTablet} from '../../mixins/breakpoints';

export const StyledText = styled.span<TextProps>`
  color: white;
  ${({type}) => getTextStyles(type)};
  font-family: ${(props) => props.textFont};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => (props.size ? `${props.size}px` : '')};
  line-height: ${(props) => (props.lineHeight ? `${props.lineHeight}px` : '')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? `${props.letterSpacing}px` : ''};
`;
