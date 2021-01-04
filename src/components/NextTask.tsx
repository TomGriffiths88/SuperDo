import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import done from '../images/icons/X.svg';
import { useTasks } from '../contexts/tasksContext';

export default function NextTask() {
  const { tasks, completeTask } = useTasks();

  if (tasks && tasks.filter((task, i) => !task.complete).length > 0) {
    const nextTask = tasks.filter((task, i) => !task.complete)[0];
    return (
      <Container>
        <Task>{nextTask.name}</Task>
        <motion.img
          whileHover={{ rotate: 90 }}
          src={done}
          alt='mark complete'
          style={{ cursor: 'pointer' }}
          onClick={() => completeTask(nextTask.id)}
        />
      </Container>
    );
  } else {
    return null;
  }
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`;

const Task = styled.div`
  font-size: 72px;
  font-weight: bold;
`;
