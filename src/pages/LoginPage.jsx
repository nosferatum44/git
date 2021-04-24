import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import Button from '../components/common/Button';
import Octocat from '../assets/Octocat.jpg';

const LoginPage = ({ isError, isLoading, getUser }) => {
  const [value, setValue] = useState('');
  const [isAlert, setIsAlert] = useState(false);

  useEffect(() => {
    isError ? setIsAlert(true) : setIsAlert(false);
  }, [isError]);

  const handleSubmit = (event) => {
    event.preventDefault();
    getUser(value);
  };

  return (
    <Wrapper>
      <Logo src={Octocat} />
      <StyledForm onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter username'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </Form.Group>
        <Button
          label='Login'
          isLoading={isLoading}
          type='submit'
          // onClick={() => getUser(value)}
          block
        />

        {isAlert && (
          <StyledAlert
            variant='danger'
            onClose={() => setIsAlert(false)}
            dismissible
          >
            <Message>The user not found</Message>
            <Message>Try another one</Message>
          </StyledAlert>
        )}
      </StyledForm>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Logo = styled.img`
  position: absolute;
  width: 200px;
  transform: translate(0%, -110%);
`;

const StyledForm = styled.form`
  position: relative;
  background-color: aliceblue;
  padding: 20px;
`;

const StyledAlert = styled(Alert)`
  position: absolute;
  bottom: -110px;
  width: 100%;
  left: 0;
`;

const Message = styled.p`
  margin-bottom: 2px;
`;
