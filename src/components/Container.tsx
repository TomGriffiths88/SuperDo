import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: JSX.Element[] | JSX.Element;
}

const Div = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export default function Container({ children }: ContainerProps) {
  return <Div>{children}</Div>;
}
