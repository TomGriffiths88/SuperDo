import React from 'react';
import BottomContainer from '../components/BottomContainer';

import Layout from '../components/Layout';
import MetaBar from '../components/MetaBar';
import NextTask from '../components/NextTask';
import TaskList from '../components/TaskList';
import TaskView from '../components/TaskView';
import ToolBox from '../components/ToolBox';
import TopContainer from '../components/TopContainer';
import Row from '../components/Row';

const Index = () => {
  return (
    <Layout fixed={true}>
      <MetaBar />
      <TopContainer>
        <NextTask />
      </TopContainer>
      <BottomContainer>
        <Row>
          <TaskView />
          <ToolBox />
        </Row>
        <TaskList path={'/'} />
      </BottomContainer>
    </Layout>
  );
};

export default Index;
