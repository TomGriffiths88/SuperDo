import React from 'react';
import styled from 'styled-components';

interface props {
  instruction: string;
}

export default function PageInstruction({ instruction }: props) {
  return <Div>{instruction}</Div>;
}

const Div = styled.div`
  font-size: 31px;
`;
