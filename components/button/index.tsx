import { ReactNode } from 'react';

import { Button as StyledButton } from '@styles/components/Button';

import { KeyOfPalette } from '@styles/theme';

interface ButtonProps {
  backgroundColor?: KeyOfPalette;
  color?: KeyOfPalette;
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ backgroundColor, color, children, onClick }: ButtonProps) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      color={color}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export { Button };
