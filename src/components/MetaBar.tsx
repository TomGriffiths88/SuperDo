import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import DateTime from './DateTime';

import { useTasks } from '../contexts/tasksContext';

const MetaBar = ({ history }: RouteComponentProps) => {
  const { enterPlanningMode, tasks } = useTasks();

  const clickHandler = () => {
    enterPlanningMode(); //turns on planning state
    if (tasks.filter((task, i) => task.complete === false).length >= 1) {
      history.push('/remove');
    } else {
      history.push('/add');
    }
  };

  return (
    <Div>
      <DateTime />
      <motion.div whileHover={{ y: -2 }}>
        <PlanButton onClick={clickHandler}>Plan Day</PlanButton>
      </motion.div>
    </Div>
  );
};

export default withRouter(MetaBar);
const Div = styled.div`
  margin: 0 auto;
  position: absolute;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  top: 1rem;
  left: 0;
  right: 0;
`;

const PlanButton = styled.button`
  background: none;
  text-transform: uppercase;
  font-family: inherit;
  outline: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 800;
`;
