import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Map from './map';
import { setDrawerView, setCurrentSpaceID, setRedoSearchButton } from '../../actions/ui_actions';
import { fetchLocalWorkspaces, fetchCurrentReviews, filterWorkspaces } from '../../actions/db_actions';


const mapStateToProps = (state) => {
  return {
    currentUserProfile: state.session.currentUserProfile,
    loggedIn: Boolean(state.session.currentUserProfile),
    // filterViewStatus: state.ui.filterViewStatus,
    workspaces: state.db.workspaces,
    filterName: state.ui.filterName,
    filterOutlets: state.ui.filterOutlets,
    redoSearchButtonStatus: state.ui.redoSearchButtonStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    setDrawerView: (status) => dispatch(setDrawerView(status)),
    setCurrentSpaceView: (workspaceID) => dispatch(setCurrentSpaceID(workspaceID)),
    fetchLocalWorkspaces: (location, radius) => dispatch(fetchLocalWorkspaces(location, radius)),
    setRedoSearchButton: (redoSearchButtonStatus) => dispatch(setRedoSearchButton(redoSearchButtonStatus)),
    filterWorkspaces: (filters) => dispatch(filterWorkspaces(filters))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Map);
