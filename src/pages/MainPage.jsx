import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import Image from 'react-bootstrap/Image';
import logo from '../assets/logo.png';

import Commits from '../components/Commits';
import Repositories from '../components/Repositories';
import Button from '../components/common/Button';

const MainPage = ({
  data: { login, avatar_url },
  getRepositories,
  repositories,
  getCommits,
  commits,
  signOut,
}) => {
  const [showCommits, setShowCommits] = useState(false);

  useEffect(() => {
    getRepositories(login);
    // eslint-disable-next-line
  }, []);

  const handleClick = async (repoName) => {
    getCommits(login, repoName);
    setShowCommits(true);
  };

  return (
    <Wrapper>
      <Header>
        <Logo src={logo} rounded fluid />
        <Profile>
          <Avatar src={avatar_url} rounded fluid />
          <Username>{login}</Username>
        </Profile>
        <Button label='Sign out' onClick={signOut} />
      </Header>

      <Content>
        {showCommits ? (
          <Commits
            {...{
              data: commits,
              getCommits,
              onReturn: () => setShowCommits(false),
            }}
          />
        ) : (
          <Repositories
            {...{ data: repositories, getRepositories, handleClick }}
          />
        )}
      </Content>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
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
  margin: 0 20px;
`;

const Logo = styled(Image)`
  width: 32px;
  height: 32px;
`;
const Avatar = styled(Image)`
  width: 32px;
  height: 32px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  max-width: 900px;
  height: 600px;
  overflow: auto;
`;
