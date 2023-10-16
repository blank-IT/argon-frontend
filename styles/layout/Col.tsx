/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

type ColProps = {
  span?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

const getColumnWidth = (value?: number) => {
  if (!value) return;

  const width = (value / 12) * 100;

  return `flex: 0 1 ${width}%; max-width: ${width}%;`;
};

const Col = styled.div<ColProps>`
  padding-right: 15px;
  padding-left: 15px;
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;

  ${(props) =>
    props.sm &&
    `
    @media (min-width: 576px) {
      ${getColumnWidth(props.sm)}
    }
  `}
  ${(props) =>
    props.md &&
    `
    @media (min-width: 768px) {
      ${getColumnWidth(props.md)}
    }
  `}
  ${(props) =>
    props.lg &&
    `
    @media (min-width: 992px) {
      ${getColumnWidth(props.lg)}
    }
  `}
  ${(props) =>
    props.xl &&
    `
    @media (min-width: 1200px) {
      ${getColumnWidth(props.xl)}
    }
  `}

  ${(props) => props.span && getColumnWidth(props.span)}
`;

export { Col };
