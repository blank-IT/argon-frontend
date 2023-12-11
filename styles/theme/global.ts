/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const global = css`
  ${emotionReset}

  html {
    font-size: 10px;
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }

  div {
    box-sizing: border-box;
  }
`;
