import { connect } from 'react-redux';
import Orders from './orders';


const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setDrawerView: (status) => dispatch(setDrawerView(status))
  };
};

export default connect(null, null)(Orders);
