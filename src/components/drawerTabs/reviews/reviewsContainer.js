import { connect } from 'react-redux';
import Reviews from './reviews';


const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setDrawerView: (status) => dispatch(setDrawerView(status))
  };
};

export default connect(null, null)(Reviews);
