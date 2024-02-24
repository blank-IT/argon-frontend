'use client';

import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { Header } from '@components/header';

import { Container } from '@styles/layout';

const CareerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StyledLoginLayout>
      <Header>
        <Header.BackButton />
      </Header>

      <Container>{children}</Container>
    </StyledLoginLayout>
  );
};

const StyledLoginLayout = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   height: 100vh;

  //   > div:first-child {
  //     flex-shrink: 0;
  //   }

  //   >div: last-child {
  //     display: flex;
  //     flex-grow: 1;
  //     flex-direction: column;
  //     justify-content: flex-end;
  //   }
`;

export default CareerLayout;
