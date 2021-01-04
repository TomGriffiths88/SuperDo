import React from 'react';
import BottomContainer from '../components/BottomContainer';

import Layout from '../components/Layout';
import TaskList from '../components/TaskList';
import TopContainer from '../components/TopContainer';
import TaskInput from '../components/TaskInput';
import PageInstruction from '../components/PageInstruction';
import Row from '../components/Row';
import PageNavigation from '../components/PageNavigation';

const Add = () => {
  return (
    <Layout fixed={false}>
      <TopContainer>
        <Row>
          <PageInstruction instruction={'What needs doing?'} />
          <PageNavigation instruction={'Prioritise'} path={'/arrange'} />
        </Row>
        <TaskInput />
      </TopContainer>
      <BottomContainer>
        <TaskList path={'/add'} />
      </BottomContainer>
    </Layout>
  );
};

export default Add;
