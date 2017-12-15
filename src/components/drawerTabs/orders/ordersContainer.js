import { connect } from 'react-redux';
import Orders from './orders';


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

export default connect(mapStateToProps, null)(Orders);
