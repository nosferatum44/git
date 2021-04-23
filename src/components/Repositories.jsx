import React from 'react';

import styled from 'styled-components';

import Table from 'react-bootstrap/Table';

import { Spinner } from './common';

const Repositories = ({ data: { isLoading, data }, handleClick }) => {
  if (isLoading) return <Spinner />;
  if (!data) return null;
  return (
    <>
      <Title>Repositories</Title>
      <TableWrapper>
        <Table striped bordered hover>
          <Head>
            <HeadRow>
              <HeaderCell>Name</HeaderCell>
              <HeaderCell>Language</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Stars</HeaderCell>
            </HeadRow>
          </Head>
          <Body>
            {data.map(
              ({
                id,
                name,
                language,
                description,
                stargazers_count: stars,
              }) => (
                <BodyRow key={id}>
                  <BodyCell onClick={() => handleClick(name)} hover>
                    {name}
                  </BodyCell>
                  <BodyCell>{language}</BodyCell>
                  <BodyCell>{description}</BodyCell>
                  <BodyCell>{stars}</BodyCell>
                </BodyRow>
              )
            )}
          </Body>
        </Table>
      </TableWrapper>
    </>
  );
};

export default Repositories;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const TableWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const Head = styled.thead``;
const HeadRow = styled.tr``;
const HeaderCell = styled.th`
  position: sticky;
  top: 0;
  background-color: white;
`;

const Body = styled.tbody`
  overflow-y: auto;
`;
const BodyRow = styled.tr``;
const BodyCell = styled.td`
  cursor: ${({ hover }) => (hover ? 'pointer' : 'default')};
`;
