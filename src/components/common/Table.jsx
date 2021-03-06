import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import styled from 'styled-components';
import { default as BootstrapTable } from 'react-bootstrap/Table';

const getProps = (row, propName, clickableCell, onClick) => {
  if (propName === clickableCell)
    return {
      key: uuidv4(),
      onClick: () => onClick(row[propName]),
      hover: true,
    };
  return { key: uuidv4() };
};

const Table = ({
  data,
  headers,
  propNames,
  clickableCell,
  onClick,
  variant = 'white',
}) => {
  return (
    <Wrapper>
      <StyledTable variant={variant} striped hover>
        <Head>
          <HeadRow>
            {headers.map((header) => (
              <HeaderCell key={uuidv4()} theme={variant}>
                {header}
              </HeaderCell>
            ))}
          </HeadRow>
        </Head>
        <Body>
          {data.map((row) => (
            <BodyRow key={uuidv4()}>
              {propNames.map((propName) => (
                <BodyCell {...getProps(row, propName, clickableCell, onClick)}>
                  {row[propName]}
                </BodyCell>
              ))}
            </BodyRow>
          ))}
        </Body>
      </StyledTable>
    </Wrapper>
  );
};

export default Table;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border: 1px solid #d4d6d8;
  overflow: auto;
`;

const StyledTable = styled(BootstrapTable)`
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
`;

const Head = styled.thead``;
const HeadRow = styled.tr``;
const HeaderCell = styled.th`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => (theme === 'white' ? 'white' : '#343a40')};
  border: 0 !important;
  word-wrap: break-word;
`;

const Body = styled.tbody`
  overflow-y: auto;
`;
const BodyRow = styled.tr``;
const BodyCell = styled.td`
  word-wrap: break-word;
  cursor: ${({ hover }) => (hover ? 'pointer' : 'default')};
  :hover {
    text-decoration: ${({ hover }) => hover && 'underline'};
  }
`;
