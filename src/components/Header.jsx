import React from 'react';

import styled from 'styled-components';

import Image from 'react-bootstrap/Image';
import logo from '../assets/logo.png';

import Button from '../components/common/Button';

const Header = ({ login, avatar, signOut }) => {
  return (
    <Wrapper>
      <Logo src={logo} rounded fluid />
      <Profile>
        <Avatar src={avatar} rounded fluid />
        <Username>{login}</Username>
      </Profile>
      <Button label='Sign out' onClick={signOut} />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background-color: aliceblue;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 20px;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
`;
const Username = styled.p`
  margin: 0px 0 0 20px;
`;

const Logo = styled(Image)`
  width: 32px;
  height: 32px;
`;
const Avatar = styled(Image)`
  width: 32px;
  height: 32px;
`;
