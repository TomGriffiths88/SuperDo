import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TasksContext = createContext<contextInterface>({
  tasks: [],
  inPlanner: false,
  addTask: () => console.warn('task not available'),
  completeTask: () => console.warn('task not available'),
  reorderTasks: () => console.warn('tasks not available'),
  removeTask: () => console.warn('tasks not available'),
  enterPlanningMode: () => console.warn('tasks not available'),
  exitPlanningMode: () => console.warn('tasks not available'),
});

interface TasksContextProviderProps {
  children: JSX.Element;
}

export const useTasks = () => useContext(TasksContext);

export const TasksContextProvider = ({
  children,
}: TasksContextProviderProps) => {
  const [tasks, setTasks] = useState(TASKS);
  const [inPlanner, setInPlanner] = useState(false);

  useEffect(() => {
    const localTasks = localStorage.getItem('tasks');
    if (localTasks) {
      setTasks(JSON.parse(localTasks));
    }
  }, [setTasks]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name: string) => {
    const newTask = {
      name,
      id: uuidv4(),
      complete: false,
    };

    const newTasks = [...tasks, newTask];

    setTasks(newTasks);
  };

  const completeTask = (id: string) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.id === id);
    newTasks[index].complete = true;
    setTasks(newTasks);
  };

  const removeTask = (id: string) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.id === id);
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const enterPlanningMode = () => {
    setInPlanner(true);
  };

  const exitPlanningMode = () => {
    setInPlanner(false);
  };

  const reorderTasks = (draggedId: string, draggedOverId: string) => {
    console.log('re-ordering ', draggedId + '  ' + draggedOverId);
    const tasksCopy = [...tasks];
    const draggedItemIndex = tasksCopy.findIndex(
      (task) => task.id === draggedId
    );
    const draggedOverItemIndex = tasksCopy.findIndex(
      (task) => task.id === draggedOverId
    );
    console.log(draggedItemIndex, draggedOverItemIndex);
    const draggedItemCopy = tasksCopy[draggedItemIndex];
    tasksCopy.splice(draggedItemIndex, 1);
    tasksCopy.splice(draggedOverItemIndex, 0, draggedItemCopy);
    setTasks(tasksCopy);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        inPlanner,
        addTask,
        completeTask,
        removeTask,
        reorderTasks,
        enterPlanningMode,
        exitPlanningMode,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

interface task {
  name: string;
  complete: boolean;
  id: string;
}

const TASKS: task[] = [
  {
    name: 'Wash the dishes',
    complete: false,
    id: '1',
  },
  {
    name: 'Wrap the presents',
    complete: false,
    id: '3',
  },
  {
    name: 'Sell the cat',
    complete: false,
    id: '4',
  },
  {
    name: 'Clean the kitchen',
    complete: false,
    id: '5',
  },
  {
    name: 'Something else',
    complete: false,
    id: '6',
  },
  {
    name: 'Clean the kitchen',
    complete: false,
    id: '7',
  },
];

export interface contextInterface {
  tasks: any[];
  inPlanner: boolean;
  addTask: (name: string) => void;
  completeTask: (id: string) => void;
  reorderTasks: (draggedIndex: string, draggedOverIndex: string) => void;
  removeTask: (id: string) => void;
  enterPlanningMode: () => void;
  exitPlanningMode: () => void;
}
