import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Map from './map';


const mapStateToProps = (state) => {
  return {
    currentUserProfile: state.session.currentUserProfile,
    loggedIn: Boolean(state.session.currentUserProfile)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Map);
