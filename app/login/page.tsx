'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styled from '@emotion/styled';
import { useQuery, useMutation, gql } from '@apollo/client';

import { Button } from '@components/button';
import { ImageViewer } from '@components/imageViewer';

import { Text } from '@styles/components';
import { Icon } from '@styles/components/Icon';

const GET_COUNTRIES = gql`
  query Heath {
    health {
      status
    }
  }
`;

const LoginPage = () => {
  const router = useRouter();

  // const { data, loading, error } = useQuery(GET_COUNTRIES);

  const [handleGenerateGoogleAuthUrl, { data, loading, error }] = useMutation(
    gql`
      mutation {
        generateGoogleAuthUrl
      }
    `,
  );

  const handleLoginDefault = useCallback(() => {
    alert('준비 중입니다.');
  }, []);

  const handleLoginGoogle = useCallback(async () => {
    const response = await handleGenerateGoogleAuthUrl();

    const { generateGoogleAuthUrl } = response.data;

    console.log('generateGoogleAuthUrl: ', generateGoogleAuthUrl);

    // 구글 회원 가입 후 /termsOfUse으로 리다이렉트

    // router.push('/termsOfUse');
  }, []);

  return (
    <StyledLoginPage>
      <Button backgroundColor="yellow_100" onClick={handleLoginDefault}>
        <Icon size={24} icon="kakaoLogo" />
        <Text as="span" typo="subHeadLine_2" color="gray_100">
          카카오로 시작하기
        </Text>
      </Button>
      <Button backgroundColor="gray_100" onClick={handleLoginDefault}>
        <Icon size={24} icon="appleLogo" />
        <Text as="span" typo="subHeadLine_2" color="gray_1">
          애플로 시작하기
        </Text>
      </Button>
      <Button backgroundColor="gray_1" onClick={handleLoginGoogle}>
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
      <Button backgroundColor="gray_1" onClick={handleLoginDefault}>
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
