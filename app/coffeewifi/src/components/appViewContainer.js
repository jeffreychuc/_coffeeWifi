import { connect } from 'react-redux';
import { login, logout, getUserProfile} from '../actions/session_actions';
import App from './app';


const mapStateToProps = (state) => {
  return {
    currentUserProfile: state.session.currentUserProfile,
    loggedIn: Boolean(state.session.currentUserProfile)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    getUserProfile: (accessToken) => dispatch(getUserProfile(accessToken))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
