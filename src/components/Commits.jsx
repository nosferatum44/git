import React from 'react';

import styled from 'styled-components';

import Table from 'react-bootstrap/Table';

import { Button, Spinner } from './common';

const Commits = ({ data: { isLoading, data }, onReturn }) => {
  if (isLoading) return <Spinner />;
  if (!data) return null;
  return (
    <>
      <Title>Commits</Title>
      <TableWrapper>
        <Table striped bordered hover>
          <Head>
            <HeadRow>
              <HeaderCell>Author</HeaderCell>
              <HeaderCell>Sha</HeaderCell>
              <HeaderCell>Date</HeaderCell>
            </HeadRow>
          </Head>
          <Body>
            {data.map(({ commit: { author: { name, date } }, sha }) => (
              <BodyRow key={sha}>
                <BodyCell>{name}</BodyCell>
                <BodyCell>{sha}</BodyCell>
                <BodyCell>{date}</BodyCell>
              </BodyRow>
            ))}
          </Body>
        </Table>
      </TableWrapper>
      <Button label='Back to repositories' onClick={onReturn} />
    </>
  );
};

export default Commits;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const TableWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
  margin-bottom: 20px;
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
const BodyCell = styled.td``;
