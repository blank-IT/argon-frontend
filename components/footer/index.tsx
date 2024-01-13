import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { ImageViewer } from '@components/imageViewer';

import { Container } from '@styles/layout';
import { Text } from '@styles/components';

interface FooterProps {
  children?: ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return (
    <StyledFooter>
      <Container>
        {children}
        <Footer.Info />
        <Footer.Description />
      </Container>
    </StyledFooter>
  );
};

const Logo = () => {
  return (
    <StyledLogo>
      <ImageViewer src="/images/logo.png" alt="logo" width={85} height={24} />
    </StyledLogo>
  );
};

const Info = () => {
  return (
    <StyledInfoWrap>
      <li>
        <Text typo="medium_2" color="gray_70">
          이용약관
        </Text>
      </li>
      <li>
        <Text typo="medium_2" color="gray_70">
          개인정보처리방침
        </Text>
      </li>
      <li>
        <Text typo="medium_2" color="gray_70">
          info@BlankiT.co.email
        </Text>
      </li>
    </StyledInfoWrap>
  );
};

const Description = () => {
  return (
    <StyledDescription>
      <Text typo="body_2" color="gray_70">
        나를 기록하고 성장하는 모험, 블랭킷
      </Text>
    </StyledDescription>
  );
};

Footer.Logo = Logo;
Footer.Info = Info;
Footer.Description = Description;

export { Footer };

const StyledFooter = styled.footer`
  padding: 40px 0;

  border-top: 1px solid ${({ theme }) => theme.palette['gray_6']};
`;

const StyledInfoWrap = styled.ul`
  margin-top: 24px;

  li {
    display: inline-block;
  }

  li:not(:first-child) {
    margin-left: 16px;
  }
`;

const StyledDescription = styled.div`
  margin-top: 16px;
`;

const StyledLogo = styled.div``;
