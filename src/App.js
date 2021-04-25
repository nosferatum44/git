import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Global from './styles/global';
import styled from 'styled-components';

import MainPageContainer from './containers/MainPageContainer';
import LoginPageContainer from './containers/LoginPageContainer';

function App({ isLoggedIn }) {
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <Wrapper>
      <Global />
      {isLoggedIn ? <MainPageContainer /> : <LoginPageContainer />}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: -webkit-fill-available;
`;
