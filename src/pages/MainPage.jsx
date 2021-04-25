import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import Header from '../components/Header';
import Commits from '../components/Commits';
import Repositories from '../components/Repositories';

import { Button } from '../components/common';

const MainPage = ({
  data: { login, avatar_url: avatar },
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
      <Header {...{ login, avatar, signOut }} />

      <Content>
        {showCommits ? (
          <>
            <Commits
              {...{
                data: commits,
                getCommits,
                onReturn: () => setShowCommits(false),
              }}
            />
            {!commits.isLoading && (
              <StyledButton
                label='Back to repositories'
                onClick={() => setShowCommits(false)}
              />
            )}
          </>
        ) : (
          <Repositories
            {...{ data: repositories, getRepositories, onClick: handleClick }}
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
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  max-width: 900px;
  height: 100%;
  overflow: auto;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;
