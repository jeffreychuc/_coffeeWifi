import { connect } from 'react-redux';
import Status from './status';


const mapStateToProps = (state) => {
  return {
    currentSpaceID: state.ui.currentSpaceID
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setDrawerView: (status) => dispatch(setDrawerView(status))
  };
};

export default connect(mapStateToProps, null)(Status);
