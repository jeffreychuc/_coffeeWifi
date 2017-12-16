import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Map from './map';
import { setDrawerView, setCurrentSpaceID } from '../../actions/ui_actions';
import { fetchLocalWorkspaces, fetchCurrentReviews } from '../../actions/db_actions';


const mapStateToProps = (state) => {
  return {
    currentUserProfile: state.session.currentUserProfile,
    loggedIn: Boolean(state.session.currentUserProfile),
    filterViewStatus: state.ui.filterViewStatus,
    workspaces: state.db.workspaces
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    setDrawerView: (status) => dispatch(setDrawerView(status)),
    setCurrentSpaceView: (workspaceID) => dispatch(setCurrentSpaceID(workspaceID)),
    fetchLocalWorkspaces: (location, radius) => dispatch(fetchLocalWorkspaces(location, radius)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Map);
