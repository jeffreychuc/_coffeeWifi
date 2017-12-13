import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MenuIcon from './menuIcon';


const mapStateToProps = (state) => {
  return {
    // currentUserProfile: state.session.currentUserProfile,
    // loggedIn: Boolean(state.session.currentUserProfile)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(null,mapDispatchToProps)(MenuIcon);
