import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Map from './map';
import { setDrawerView } from '../../actions/ui_actions';


const mapStateToProps = (state) => {
  return {
    currentUserProfile: state.session.currentUserProfile,
    loggedIn: Boolean(state.session.currentUserProfile),
    filterViewStatus: state.ui.filterViewStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    setDrawerView: (status) => dispatch(setDrawerView(status))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Map);
