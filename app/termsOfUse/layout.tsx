'use client';

import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { Header } from '@components/header';

import { Container } from '@styles/layout';

const TermsOfUseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StyledTermsOfUseLayout>
      <Header>
        <Header.BackButton />
      </Header>

      <Container>{children}</Container>
    </StyledTermsOfUseLayout>
  );
};

const StyledTermsOfUseLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  > div:first-child {
    flex-shrink: 0;
  }

  >div: last-child {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    // justify-content: flex-end;
  }
`;

export default TermsOfUseLayout;
