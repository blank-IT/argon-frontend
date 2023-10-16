/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

type ContainerProps = {
  fluid?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
};

const Container = styled.div<ContainerProps>`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  background-color: gray;
  margin-top: 10px;
  height: 20px;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  ${(props) =>
    props.fluid &&
    `
    max-width: 100%;
  `}

  ${(props) =>
    props.sm &&
    `
    @media (min-width: 576px) {
      max-width: 540px;
    }
  `}
  ${(props) =>
    props.md &&
    `
    @media (min-width: 768px) {
      max-width: 720px;
    }
  `}
  ${(props) =>
    props.lg &&
    `
    @media (min-width: 992px) {
      max-width: 960px;
    }
  `}
  ${(props) =>
    props.xl &&
    `
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
  `}
`;

export { Container };
