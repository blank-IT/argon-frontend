/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  boldFont,
  mediumFont,
  regularFont,
  //   lightFont,
  //   thineFont,
} from '@styles/fonts';

const calcRem = (px: number) => px / 10;
const calcRelativeLineHeight = (fontSize: number, lineHeight: number) =>
  lineHeight / fontSize;
const getFontSizeAndLineHeight = (fontSize: number, lineHeight: number) => {
  const _fontSize = calcRem(fontSize);
  const _lineHeight = calcRelativeLineHeight(fontSize, lineHeight);

  return `font-size: ${_fontSize}rem; line-height: ${_lineHeight}`;
};

export const typo = {
  headLine_1: css`
    ${boldFont};
    ${getFontSizeAndLineHeight(18, 24)};
    font-weight: bold;
    letter-spacing: -0.3px;
  `,
  headLine_2: css`
    ${boldFont};
    ${getFontSizeAndLineHeight(20, 28)};
    letter-spacing: -0.3px;
  `,

  subHeadLine_1: css`
    ${boldFont};
    ${getFontSizeAndLineHeight(12, 18)};
    letter-spacing: -0.3px;
  `,
  subHeadLine_2: css`
    ${boldFont};
    ${getFontSizeAndLineHeight(14, 20)};
    letter-spacing: -0.3px;
  `,
  subHeadLine_3: css`
    ${boldFont};
    ${getFontSizeAndLineHeight(16, 22)};
    letter-spacing: -0.3px;
  `,

  display_1: css`
    ${boldFont};
    ${getFontSizeAndLineHeight(24, 34)};
    letter-spacing: -0.3px;
  `,
  display_2: css`
    ${boldFont};
    ${getFontSizeAndLineHeight(28, 40)};
    letter-spacing: -0.3px;
  `,
  display_3: css`
    ${boldFont};
    ${getFontSizeAndLineHeight(32, 46)};
    letter-spacing: -0.3px;
  `,

  body_1: css`
    ${regularFont};
    ${getFontSizeAndLineHeight(13, 16)};
    letter-spacing: -0.3px;
  `,
  body_long_1: css`
    ${regularFont};
    ${getFontSizeAndLineHeight(13, 22)};
    letter-spacing: -0.3px;
  `,
  body_2: css`
    ${regularFont};
    ${getFontSizeAndLineHeight(14, 20)};
    letter-spacing: -0.3px;
  `,
  body_long_2: css`
    ${regularFont};
    ${getFontSizeAndLineHeight(14, 22)};
    letter-spacing: -0.3px;
  `,
  body_3: css`
    ${regularFont};
    ${getFontSizeAndLineHeight(15, 22)};
    letter-spacing: -0.3px;
  `,

  caption_1: css`
    ${regularFont};
    ${getFontSizeAndLineHeight(11, 16)};
    letter-spacing: -0.3px;
  `,
  caption_2: css`
    ${regularFont};
    ${getFontSizeAndLineHeight(12, 16)};
    letter-spacing: -0.3px;
  `,

  medium_1: css`
    ${mediumFont};
    ${getFontSizeAndLineHeight(12, 16)};
    letter-spacing: -0.3px;
  `,
  medium_2: css`
    ${mediumFont};
    ${getFontSizeAndLineHeight(14, 20)};
    letter-spacing: -0.3px;
  `,
  medium_3: css`
    ${mediumFont};
    ${getFontSizeAndLineHeight(16, 22)};
    letter-spacing: -0.3px;
  `,
};
