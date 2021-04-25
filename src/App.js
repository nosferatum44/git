import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Global from './styles/global';

import MainPageContainer from './containers/MainPageContainer';
import LoginPageContainer from './containers/LoginPageContainer';

function App({ isLoggedIn }) {
  return (
    <>
      <Global />
      {isLoggedIn ? <MainPageContainer /> : <LoginPageContainer />}
    </>
  );
}

export default App;
