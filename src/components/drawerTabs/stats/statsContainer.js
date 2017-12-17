import { connect } from 'react-redux';
import Stats from './stats';
import { fetchCurrentReviews } from '../../../actions/db_actions';


const mapStateToProps = (state) => {
  return {
    currentSpaceID: state.ui.currentSpaceID,
    currentReviews: state.db.currentReviews
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
