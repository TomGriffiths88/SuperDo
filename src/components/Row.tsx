import React from 'react';
import styled from 'styled-components';

interface props {
  children: JSX.Element[] | JSX.Element;
}

export default function Row({ children }: props) {
  return <Div>{children}</Div>;
}

const Div = styled.div`
  display: flex;
  align-items: center;
`;
