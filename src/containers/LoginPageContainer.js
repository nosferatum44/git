import { connect } from 'react-redux';
import api from '../api';
import LoginPage from '../pages/LoginPage';

import { actionCreators as actions } from '../redux/reducers/userReducer';

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: async (username) => {
    dispatch(actions.user.request());
    try {
      const { status, data, error } = await api.getUser(username);
      debugger;
      if (status === 200) return dispatch(actions.user.success(data));

      dispatch(actions.user.failure(error));
    } catch (error) {
      dispatch(actions.user.failure(error));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
