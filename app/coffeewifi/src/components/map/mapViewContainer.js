import { connect } from 'react-redux';
import Map from './map';


const mapStateToProps = (state) => {
  return {
    currentUserProfile: state.session.currentUserProfile,
    loggedIn: Boolean(state.session.currentUserProfile)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps,null)(Map);
