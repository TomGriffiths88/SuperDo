import * as React from 'react';
import styled from 'styled-components';

interface layoutProps {
  children: JSX.Element[];
  fixed: boolean;
}

const Div = styled.div`
  display: grid;
  grid-template-rows: ${(props: layoutProps) =>
      props.fixed ? '50vh' : 'min-content'} 1fr;
  grid-template-columns: 1fr;
  height: 100vh;
  transition: all 0.3s;
`;

const Layout = (props: layoutProps) => {
  return (
    <Div className='layout' fixed={props.fixed}>
      {props.children}
    </Div>
  );
};

export default Layout;
