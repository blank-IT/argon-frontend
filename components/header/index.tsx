import { useCallback, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

import { LeftOutlined } from '@ant-design/icons';

import { ImageViewer } from '@components/imageViewer';

import styled from '@emotion/styled';
import { Container } from '@styles/layout';

interface HeaderProps {
  title?: string;
  children?: ReactNode;
}

const Header = ({ title, children }: HeaderProps) => {
  return (
    <StyledHeader>
      <Container>
        <nav>
          <StyledTitle>{title}</StyledTitle>

          {children}
        </nav>
      </Container>
    </StyledHeader>
  );
};

const Logo = () => {
  return (
    <StyledLogo>
      <ImageViewer src="/images/logo.png" alt="logo" width={100} height={100} />
    </StyledLogo>
  );
};

const BackButton = () => {
  const router = useRouter();

  const onClick = useCallback(() => {
    router.back();
  }, []);

  return (
    <div onClick={onClick}>
      <LeftOutlined />
    </div>
  );
};

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: block;

  padding: 10px 0;

  nav {
    position: relative;
  }
`;

const StyledTitle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;

  transform: translate(-50%, 0);
`;

const StyledLogo = styled.div`
  position: relative;

  margin: 45px 0 33px;

  text-align: center;
`;

Header.Logo = Logo;
Header.BackButton = BackButton;

export { Header };
