import { useRef } from 'react';
import styled from 'styled-components';
import { useTasks } from '../contexts/tasksContext';

import Task from './Task';

const Ul = styled.ul`
  list-style: none;
`;

interface props {
  path: string;
}

export default function TaskList({ path }: props) {
  const { tasks } = useTasks();
  const draggingItem = useRef<string | null>();
  const dragOverItem = useRef<string | null>();

  let filteredTasks: any[] = [];

  const { reorderTasks } = useTasks();

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>, id: string) => {
    draggingItem.current = id;
    console.log('Dragging', id);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLLIElement>, id: string) => {
    dragOverItem.current = id;

    if (dragOverItem.current && draggingItem.current) {
      reorderTasks(draggingItem.current, dragOverItem.current);
    }

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
  };

  if (tasks) {
    filteredTasks = tasks.filter((task, i) => !task.complete);
  }

  return (
    <Ul>
      {filteredTasks.map((task, i) => (
        <Task
          path={path}
          id={task.id}
          key={i}
          dragStart={handleDragStart}
          dragOver={handleDragEnter}
        >
          {task.name}
        </Task>
      ))}
    </Ul>
  );
}
