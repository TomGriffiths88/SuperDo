import React from 'react';
import styled from 'styled-components';

export default function TaskView() {
  return (
    <Div>
      <Todo>Todo</Todo>
    </Div>
  );
}

const Div = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: var(--clr-grey);
`;

const Todo = styled.span`
  color: white;
`;
