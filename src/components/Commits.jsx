import React from 'react';

import styled from 'styled-components';

import { Table, Button, Spinner } from './common';

const formattedData = (data) =>
  data.map(({ commit: { author: { name, date } }, sha }) => ({
    name,
    date,
    sha,
  }));

const Commits = ({ data: { isLoading, data }, onReturn }) => {
  if (isLoading) return <Spinner />;
  if (!data) return null;

  return (
    <>
      <Title>Commits</Title>
      <Table
        data={formattedData(data)}
        headers={['Author', 'Sha', 'Date']}
        propNames={['name', 'sha', 'date']}
      />

      <Button label='Back to repositories' onClick={onReturn} />
    </>
  );
};

export default Commits;

const Title = styled.h2`
  margin-bottom: 20px;
`;
