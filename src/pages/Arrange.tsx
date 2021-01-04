import React from 'react';
import BottomContainer from '../components/BottomContainer';

import Layout from '../components/Layout';
import PageInstruction from '../components/PageInstruction';
import PageNavigation from '../components/PageNavigation';
import TaskList from '../components/TaskList';
import TopContainer from '../components/TopContainer';
import Row from '../components/Row';

const Add = () => {
  return (
    <Layout fixed={false}>
      <TopContainer>
        <Row>
          <PageInstruction instruction='Lets put those tasks in order' />
          <PageNavigation instruction={'Lets go'} path={'/'} />
        </Row>
      </TopContainer>
      <BottomContainer>
        <TaskList path={'/arrange'} />
      </BottomContainer>
    </Layout>
  );
};

export default Add;
