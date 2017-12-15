import { connect } from 'react-redux';
import Stats from './stats';


const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setDrawerView: (status) => dispatch(setDrawerView(status))
  };
};

export default connect(null, null)(Stats);
