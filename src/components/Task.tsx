import React from 'react';
import styled from 'styled-components';

import RemoveTask from './Icons/RemoveTask';
import ArrangeHandle from './Icons/ArrangeHandle';

interface TaskProps {
  children: string;
  path: string;
  id: string;
  dragStart: (e: React.DragEvent<HTMLLIElement>, id: string) => void;
  dragOver: (e: React.DragEvent<HTMLLIElement>, id: string) => void;
}

const Li = styled.li`
  font-size: 32px;
  font-weight: 300;
  color: #888;
  margin-bottom: 1.1rem;
  display: flex;
  align-items: center;
`;

export default function Task({
  children,
  path,
  id,
  dragStart,
  dragOver,
}: TaskProps) {
  return (
    <Li
      style={{ cursor: path === '/arrange' ? 'move' : 'inherit' }}
      draggable={path === '/arrange'}
      onDragStart={(e) => dragStart(e, id)}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => dragOver(e, id)}
    >
      {path === '/remove' && <RemoveTask id={id} />}
      {path === '/arrange' && <ArrangeHandle />}
      {children}
    </Li>
  );
}
