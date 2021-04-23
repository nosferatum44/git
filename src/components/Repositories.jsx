import React from 'react';

import styled from 'styled-components';

import { Spinner, Table } from './common';

const Repositories = ({ data: { isLoading, data }, onClick }) => {
  if (isLoading) return <Spinner />;
  if (!data) return null;
  return (
    <>
      <Title>Repositories</Title>
      <Table
        data={data}
        headers={['Name', 'Language', 'Description', 'Stars']}
        propNames={['name', 'language', 'description', 'stargazers_count']}
        clickableCell='name'
        onClick={onClick}
      />
    </>
  );
};

export default Repositories;

const Title = styled.h2`
  margin-bottom: 20px;
`;
