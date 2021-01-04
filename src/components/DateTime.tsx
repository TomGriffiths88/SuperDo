import React from 'react';
import styled from 'styled-components';
import DateString from './DateString';
import Time from './Time';

const Div = styled.div`
  color: var(--clr-grey);
  display: flex;
  width: 50%;
`;

export default function DateTime() {
  return (
    <Div className='date-time'>
      <DateString />
      <Time />
    </Div>
  );
}
