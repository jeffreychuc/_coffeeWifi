import { connect } from 'react-redux';
import Stats from './stats';
import { fetchCurrentReviews, fetchCurrentStats } from '../../../actions/db_actions';


const mapStateToProps = (state) => {
  return {
    currentSpaceID: state.ui.currentSpaceID,
    currentStats: state.db.currentStats
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentStats: (businessID) => dispatch(fetchCurrentStats(businessID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
