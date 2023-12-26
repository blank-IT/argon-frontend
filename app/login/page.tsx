'use client';

import styled from '@emotion/styled';

import { Button } from '@components/button';
import { ImageViewer } from '@components/imageViewer';

import { Text } from '@styles/components';
import { Icon } from '@styles/components/Icon';

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <Button backgroundColor="yellow_100">
        <Icon size={24} icon="kakaoLogo" />
        <Text as="span" typo="subHeadLine_2" color="gray_100">
          카카오로 시작하기
        </Text>
      </Button>
      <Button backgroundColor="gray_100">
        <Icon size={24} icon="appleLogo" />
        <Text as="span" typo="subHeadLine_2" color="gray_1">
          애플로 시작하기
        </Text>
      </Button>
      <Button backgroundColor="gray_1">
        <ImageViewer
          src="/images/ic_google_logo.png"
          width={24}
          height={24}
          alt={''}
        />
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
