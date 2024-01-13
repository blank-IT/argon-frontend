import { useCallback, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import styled from '@emotion/styled';

import { ImageViewer } from '@components/imageViewer';

import { Container } from '@styles/layout';
import { Icon } from '@styles/components/Icon';

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
      <ImageViewer src="/images/logo.png" alt="logo" width={85} height={24} />
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
      <Icon icon="arrowsLeft" size={32} />
    </div>
  );
};

const Profile = () => {
  // const router = useRouter();

  const onClick = useCallback(() => {
    alert('준비 중입니다.');
  }, []);

  return (
    <div onClick={onClick}>
      <ImageViewer
        src="/images/profile_v1.png"
        alt="profile"
        width={32}
        height={32}
      />
    </div>
  );
};

const StyledHeader = styled.div`
  // position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: block;

  padding: 10px 0;

  nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledTitle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;

  transform: translate(-50%, 0);
`;

const StyledLogo = styled.div`
  // position: relative;

  // margin: 45px 0 33px;

  // text-align: center;
`;

Header.Logo = Logo;
Header.BackButton = BackButton;
Header.Profile = Profile;

export { Header };
