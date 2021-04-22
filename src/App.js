import React from 'react';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import MainPage from './pages/MainPage';
import LoginPageContainer from './containers/LoginPageContainer';

function App({ isLoggedIn }) {
  return (
    <Wrapper>{isLoggedIn ? <MainPage /> : <LoginPageContainer />}</Wrapper>
  );
}

const mapStateToProps = ({ user: { isLoggedIn } }) => ({
  isLoggedIn,
});
export default connect(mapStateToProps)(App);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
