/** @jsxImportSource @emotion/react */
import { Theme } from '@emotion/react';

import { palette } from '@styles/theme/palette';
import { typo } from '@styles/theme/typo';

export type TypeOfPalette = typeof palette;
export type KeyOfPalette = keyof typeof palette;

export type KeyofTheme = keyof typeof theme;

export type TypeOfTypo = typeof typo;
export type KeyOfTypo = keyof typeof typo;

export type TextType = {
  typo: KeyOfTypo;
  color?: KeyOfPalette;
};

export const theme: Theme = {
  palette,
  typo,
};
