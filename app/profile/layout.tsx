'use client';

import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { Header } from '@components/header';
import { Footer } from '@components/footer';

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StyledProfileLayout>
      <Header>
        <Header.Logo />
        <Header.Profile />
      </Header>

      <div>{children}</div>

      <Footer>
        <Footer.Logo />
      </Footer>
    </StyledProfileLayout>
  );
};

const StyledProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  > div:first-child {
    flex-shrink: 0;
  }

  >div: nth-child(2) {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-end;
  }

  > div:last-child {
    flex-shrink: 0;
  }
`;

export default ProfileLayout;
