import React, { useState } from 'react';

import styled from 'styled-components';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginPage = ({ getUser }) => {
  const [value, setValue] = useState('');

  return (
    <Wrapper>
      <Form.Group>
        <Form.Control
          type='text'
          placeholder='Enter username or login'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>
      <Button variant='primary' onClick={() => getUser(value)} block>
        Submit
      </Button>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div``;
