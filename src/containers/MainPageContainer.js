import { connect } from 'react-redux';
import api from '../api';

import { actionCreators as repositoriesActions } from '../redux/reducers/repositoriesReducer';
import { actionCreators as commitsActions } from '../redux/reducers/commitsReducer';
import { actionCreators as userActions } from '../redux/reducers/userReducer';

import MainPage from '../pages/MainPage';

const mapStateToProps = ({ user: { data }, repositories, commits }) => ({
  data,
  repositories,
  commits,
});

const mapDispatchToProps = (dispatch) => ({
  getRepositories: async (username) => {
    dispatch(repositoriesActions.repositories.get.request());
    try {
      const { status, data, error } = await api.getRepositories(username);
      if (status === 200)
        return dispatch(repositoriesActions.repositories.get.success(data));

      dispatch(repositoriesActions.repositories.get.failure(error));
    } catch (error) {
      dispatch(repositoriesActions.repositories.get.failure(error.message));
    }
  },

  getCommits: async (username, repo) => {
    dispatch(commitsActions.commits.get.request());
    try {
      const { status, data, error } = await api.getCommits(username, repo);
      if (status === 200)
        return dispatch(commitsActions.commits.get.success(data));

      dispatch(commitsActions.commits.get.failure(error));
    } catch (error) {
      dispatch(commitsActions.commits.get.failure(error.message));
    }
  },

  signOut: () => dispatch(userActions.user.signout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
