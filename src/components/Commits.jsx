import React from 'react';

import styled from 'styled-components';

import { Table, Spinner } from './common';

const Commits = ({ data: { isLoading, data } }) => {
  if (isLoading) return <Spinner />;
  if (!data) return null;

  return (
    <>
      <Title>Commits</Title>
      <Table
        data={data}
        headers={['Author', 'Sha', 'Date']}
        propNames={['name', 'sha', 'date']}
      />
    </>
  );
};

export default Commits;

const Title = styled.h2`
  margin-bottom: 20px;
`;
