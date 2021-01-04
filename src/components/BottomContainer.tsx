import * as React from 'react';
import styled from 'styled-components';
import Container from './Container';

interface BottomContainerProps {
  children: JSX.Element[] | JSX.Element;
}

const Div = styled.div`
  background-color: #222;
  color: #fff;
  min-height: 50vh;
  padding: 5rem 0;
  overflow-y: auto;
`;

export default function BottomContainer({ children }: BottomContainerProps) {
  return (
    <Div>
      <Container>{children}</Container>
    </Div>
  );
}
