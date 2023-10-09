/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const calcRem = (px: number) => px / 10;
const calcRelativeLineHeight = (fontSize: number, lineHeight: number) =>
  `${lineHeight / fontSize}`;

const getFontSizeAndLineHeight = (fontSize: number, lineHeight: number) => {
  const _fontSize = calcRem(fontSize);
  const _lineHeight = calcRelativeLineHeight(_fontSize, lineHeight);

  return `font-size: ${_fontSize}rem; line-height: ${_lineHeight}`;
};

export const typo = {
  headLine_1: css`
    ${getFontSizeAndLineHeight(18, 24)}
    font-weight: bold;
    letter-spacing: -0.3px;
  `,
  headLine_2: css`
    ${getFontSizeAndLineHeight(20, 28)}
    font-weight: bold;
    letter-spacing: -0.3px;
  `,

  subHeadLine_1: css`
    ${getFontSizeAndLineHeight(12, 18)}
    font-weight: bold;
    letter-spacing: -0.3px;
  `,
  subHeadLine_2: css`
    ${getFontSizeAndLineHeight(14, 20)}
    font-weight: bold;
    letter-spacing: -0.3px;
  `,
  subHeadLine_3: css`
    ${getFontSizeAndLineHeight(16, 22)}
    font-weight: bold;
    letter-spacing: -0.3px;
  `,

  display_1: css`
    ${getFontSizeAndLineHeight(24, 34)}
    font-weight: bold;
    letter-spacing: -0.3px;
  `,
  display_2: css`
    ${getFontSizeAndLineHeight(28, 40)}
    font-weight: bold;
    letter-spacing: -0.3px;
  `,
  display_3: css`
    ${getFontSizeAndLineHeight(32, 46)}
    font-weight: bold;
    letter-spacing: -0.3px;
  `,

  body_1: css`
    ${getFontSizeAndLineHeight(13, 16)}
    font-weight: regular;
    letter-spacing: -0.3px;
  `,
  body_long_1: css`
    ${getFontSizeAndLineHeight(13, 22)}
    font-weight: regular;
    letter-spacing: -0.3px;
  `,
  body_2: css`
    ${getFontSizeAndLineHeight(14, 20)}
    font-weight: regular;
    letter-spacing: -0.3px;
  `,
  body_long_2: css`
    ${getFontSizeAndLineHeight(14, 22)}
    font-weight: regular;
    letter-spacing: -0.3px;
  `,
  body_3: css`
    ${getFontSizeAndLineHeight(15, 22)}
    font-weight: regular;
    letter-spacing: -0.3px;
  `,

  caption_1: css`
    ${getFontSizeAndLineHeight(11, 16)}
    font-weight: regular;
    letter-spacing: -0.3px;
  `,
  caption_2: css`
    ${getFontSizeAndLineHeight(12, 16)}
    font-weight: regular;
    letter-spacing: -0.3px;
  `,

  medium_1: css`
    ${getFontSizeAndLineHeight(12, 16)}
    font-weight: medium;
    letter-spacing: -0.3px;
  `,
  medium_2: css`
    ${getFontSizeAndLineHeight(14, 20)}
    font-weight: medium;
    letter-spacing: -0.3px;
  `,
  medium_3: css`
    ${getFontSizeAndLineHeight(16, 22)}
    font-weight: medium;
    letter-spacing: -0.3px;
  `,
};
