import {css} from 'styled-components';
import {TextStyles} from './Text.types';

export const getTextStyles = (type: TextStyles) => {
  switch (type) {
    case TextStyles.HEADER:
      return css`
        font-size: 48px;
        font-weight: 700;
        line-height: 58px;
        letter-spacing: 0;
        font-family:
          Inter Display,
          sans-serif;
        color: rgba(255, 255, 255, 1);
      `;
    case TextStyles.SMALL_HEADER:
      return css`
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 1px;
        font-family: Inter, sans-serif;
        color: rgba(255, 255, 255, 0.3);
      `;
    case TextStyles.TABLE_HEADER:
      return css`
        font-size: 12px;
        font-weight: 600;
        line-height: 14px;
        letter-spacing: 1px;
        font-family: Inter, sans-serif;
        color: rgba(255, 255, 255, 0.3);
      `;
    case TextStyles.TABLE_MAIN:
      return css`
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0;
        font-family: Inter, sans-serif;
        color: rgba(255, 255, 255, 1);
      `;
    case TextStyles.SMALL:
      return css`
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        letter-spacing: 0;
        font-family: Inter, sans-serif;
        color: rgba(255, 255, 255, 0.4);
      `;
    default:
      return null;
  }
};
