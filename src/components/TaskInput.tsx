import React, { useState } from 'react';
import styled from 'styled-components';

import { useTasks } from '../contexts/tasksContext';

export default function TaskInput() {
  const [task, setTask] = useState('');

  const { addTask } = useTasks();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        type='text'
        value={task}
        onChange={(event) => setTask(event.target.value)}
        autoFocus
      />
    </form>
  );
}

const Input = styled.input`
  width: 75%;
  padding: 2rem 0;
  font-size: 72px;
  border: none;
  font-weight: var(--fnt-bold);

  :focus {
    outline: none;
  }
`;
