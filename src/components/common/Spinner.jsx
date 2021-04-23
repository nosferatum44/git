import React from 'react';

import styled from 'styled-components';

import { default as BootstrapSpinner } from 'react-bootstrap/Spinner';

const Spinner = ({
  animation = 'border',
  variant = 'primary',
  label = 'Loading...',
}) => {
  return (
    <Wrapper>
      <BootstrapSpinner {...{ animation, variant }} />
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default Spinner;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Label = styled.span`
  color: #007bff;
`;
