'use client';

import styled from '@emotion/styled';

import { Button } from '@components/button';

import { Text } from '@styles/components';

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <Button backgroundColor="yellow_100">
        <Text as="span" typo="subHeadLine_2" color="gray_100">
          카카오로 시작하기
        </Text>
      </Button>
      <Button backgroundColor="gray_100">
        <Text as="span" typo="subHeadLine_2" color="gray_1">
          애플로 시작하기
        </Text>
      </Button>
      <Button backgroundColor="gray_1">
        <Text as="span" typo="subHeadLine_2" color="gray_100">
          Google로 시작하기
        </Text>
      </Button>
      <Button backgroundColor="gray_1">
        <Text as="span" typo="subHeadLine_2" color="gray_100">
          이메일로 시작하기
        </Text>
      </Button>
    </StyledLoginPage>
  );
};

const StyledLoginPage = styled.div`
  > button:not(:first-child) {
    margin-top: 10px;
  }

  padding-bottom: 12px;
`;

export default LoginPage;
