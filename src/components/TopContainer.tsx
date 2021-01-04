import * as React from 'react';
import styled from 'styled-components';

import Container from './Container';

interface TopContainerProps {
  children: JSX.Element[] | JSX.Element;
}

const Div = styled.div`
  padding: 3rem 0;
  align-self: center;
`;

export default function TopContainer({ children }: TopContainerProps) {
  return (
    <Div>
      <Container>{children}</Container>
    </Div>
  );
}
