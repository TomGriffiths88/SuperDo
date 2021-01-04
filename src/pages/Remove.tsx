import React from 'react';
import BottomContainer from '../components/BottomContainer';

import Layout from '../components/Layout';
import TaskList from '../components/TaskList';
import TopContainer from '../components/TopContainer';
import PageInstruction from '../components/PageInstruction';
import Row from '../components/Row';
import PageNavigation from '../components/PageNavigation';

const Remove = () => {
  return (
    <Layout fixed={false}>
      <TopContainer>
        <Row>
          <PageInstruction instruction={'Anything we can remove?'} />
          <PageNavigation instruction={'Add Tasks'} path={'/add'} />
        </Row>
      </TopContainer>
      <BottomContainer>
        <TaskList path={'/remove'} />
      </BottomContainer>
    </Layout>
  );
};

export default Remove;
