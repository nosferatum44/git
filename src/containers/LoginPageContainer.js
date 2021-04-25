import { connect } from 'react-redux';
import api from '../api';
import LoginPage from '../pages/LoginPage';

import { actionCreators as userActions } from '../redux/reducers/userReducer';

const mapStateToProps = ({ user: { isError, isLoading }, repositories }) => ({
  isError,
  isLoading,
  repositories,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: async (username) => {
    dispatch(userActions.user.signin.request());
    try {
      const { status, data, error } = await api.getUser(username);
      if (status === 200) {
        return dispatch(userActions.user.signin.success(data));
      }

      dispatch(userActions.user.signin.failure(error));
    } catch (error) {
      dispatch(userActions.user.signin.failure(error.message));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
