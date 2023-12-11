import { ReactNode } from 'react';

import { Button as StyledButton } from '@styles/components/Button';

import { KeyOfPalette } from '@styles/theme';

interface ButtonProps {
  backgroundColor?: KeyOfPalette;
  color?: KeyOfPalette;
  children: ReactNode;
}

const Button = ({ backgroundColor, color, children }: ButtonProps) => {
  return (
    <StyledButton backgroundColor={backgroundColor} color={color}>
      {children}
    </StyledButton>
  );
};

export { Button };
