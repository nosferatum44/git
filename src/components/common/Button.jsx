import React from 'react';

import styled from 'styled-components';

import { default as BootstrapButton } from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const Button = ({
  label,
  variant = 'primary',
  loadingLabel = 'Loading...',
  onClick,
  isLoading,
  ...rest
}) => {
  return (
    <Wrapper {...{ variant, onClick, ...rest }}>
      {isLoading ? (
        <>
          <Spinner animation='border' size='sm' />{' '}
          <LoadingLabel>{loadingLabel}</LoadingLabel>
        </>
      ) : (
        label
      )}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled(BootstrapButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
`;

const LoadingLabel = styled.span`
  margin-left: 5px;
`;
