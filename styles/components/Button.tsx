/** @jsxImportSource @emotion/react */

import { HTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { KeyOfPalette } from '@styles/theme';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  backgroundColor?: KeyOfPalette;
  color?: KeyOfPalette;
  children?: ReactNode;
}

/**
 *
 * @param color Palette theme 선택
 */
const Button = ({ backgroundColor, color, children, ...props }: TextProps) => {
  return (
    <StyledButton
      backgroundColorKey={backgroundColor}
      colorKey={color}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  backgroundColorKey?: KeyOfPalette;
  colorKey?: KeyOfPalette;
}>`
  width: 100%;
  padding: 14px 0;

  ${({ backgroundColorKey, theme }) =>
    backgroundColorKey &&
    css`
      background-color: ${theme.palette[backgroundColorKey]};
    `}

  ${({ colorKey, theme }) =>
    colorKey &&
    css`
      color: ${theme.palette[colorKey]};
    `}
`;

export { Button };
