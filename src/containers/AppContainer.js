import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = ({ user: { isLoggedIn } }) => ({
  isLoggedIn,
});

export default connect(mapStateToProps)(App);
