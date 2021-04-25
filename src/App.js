import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Global from './styles/global';

import MainPageContainer from './containers/MainPageContainer';
import LoginPageContainer from './containers/LoginPageContainer';

function App({ isLoggedIn }) {
  let vh = window.innerHeight * 0.01;
  document.getElementById('root').style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.getElementById('root').style.setProperty('--vh', `${vh}px`);
  });

  return (
    <>
      <Global />
      {isLoggedIn ? <MainPageContainer /> : <LoginPageContainer />}
    </>
  );
}

export default App;
