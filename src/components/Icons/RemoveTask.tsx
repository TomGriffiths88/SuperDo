import Cross from '../../images/icons/RemoveTask.svg';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { useTasks } from '../../contexts/tasksContext';

interface props {
  id: string;
}

export default function RemoveTask({ id }: props) {
  const { removeTask } = useTasks();

  const clickHandler = (id: string) => {
    removeTask(id);
  };

  return (
    <Div>
      <motion.img
        whileHover={{ rotate: 90 }}
        onClick={() => clickHandler(id)}
        src={Cross}
        alt='remove task'
      />
    </Div>
  );
}

const Div = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;
