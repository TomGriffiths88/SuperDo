import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import NextArrow from './Icons/NextArrow';
import { useTasks } from '../contexts/tasksContext';
import Close from '../components/Icons/Close';

interface props {
  instruction: string;
  path: string;
}

export default function PageNavigation({ instruction, path }: props) {
  const { inPlanner } = useTasks();

  return (
    <Div>
      <Link to={path}>
        {inPlanner && <NextArrow alt={instruction} />}
        {!inPlanner && <Close />}
      </Link>
      <Text>{inPlanner ? instruction : 'Done'}</Text>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  position: relative;

  :hover span {
    opacity: 1;
  }
`;

const Text = styled.span`
  text-transform: uppercase;
  margin-top: 0.8em;
  font-size: 0.8rem;
  text-decoration: none;
  color: var(--clr-grey);
  position: absolute;
  bottom: -20px;
  opacity: 0;
  transition: 0.3s ease;
`;
