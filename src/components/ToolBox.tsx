import React from 'react';
import styled from 'styled-components';
import Add from './Icons/Add';

import Arrange from './Icons/Arrange';
import Remove from './Icons/Remove';

export default function ToolBox() {
  return (
    <Div>
      <Add />
      <Remove />
      <Arrange />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  margin-left: auto;

  img {
    padding: 5px;
    display: block;
  }
`;
