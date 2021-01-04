import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Div = styled.div`
  margin-right: 2em;
  text-transform: uppercase;
`;

export default function DateString() {
  // const date: Date = new Date();

  // const day = date.getFullYear();

  const date = moment().format('MMMM Do YYYY');

  return <Div>{`${date}`}</Div>;
}
