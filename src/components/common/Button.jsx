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
  const Content = () => {
    if (isLoading) {
      return (
        <>
          <Spinner animation='border' size='sm' />
          <LoadingLabel>{loadingLabel}</LoadingLabel>
        </>
      );
    }

    return label;
  };

  return (
    <Wrapper {...{ variant, onClick, ...rest }}>
      <Content />
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
