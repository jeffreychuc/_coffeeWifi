import { connect } from 'react-redux';
import Reviews from './reviews';
import { fetchCurrentReviews } from '../../../actions/db_actions';


const mapStateToProps = (state) => {
  return {
    currentSpaceID: state.ui.currentSpaceID,
    currentReviews: state.db.currentReviews
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentReviews: (businessID) => dispatch(fetchCurrentReviews(businessID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
