/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

type RowProps = {
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around';
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
};

// Row 컴포넌트의 스타일 정의
const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  ${(props) =>
    props.justifyContent &&
    `
  justify-content: ${
    props.justifyContent === 'start'
      ? 'flex-start'
      : props.justifyContent === 'center'
      ? 'center'
      : props.justifyContent === 'end'
      ? 'flex-end'
      : props.justifyContent === 'between'
      ? 'space-between'
      : props.justifyContent === 'around'
      ? 'space-around'
      : 'flex-start'
  };
`}

  ${(props) =>
    props.alignItems &&
    `
    align-items: ${
      props.alignItems === 'start'
        ? 'flex-start'
        : props.alignItems === 'center'
        ? 'center'
        : props.alignItems === 'end'
        ? 'flex-end'
        : props.alignItems === 'stretch'
        ? 'stretch'
        : props.alignItems === 'baseline'
        ? 'baseline'
        : 'stretch'
    };
  `}
`;

export default Row;
