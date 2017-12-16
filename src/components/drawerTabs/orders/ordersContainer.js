import { connect } from 'react-redux';
import Orders from './orders';



const mapStateToProps = (state) => {
  return {
    currentSpaceID: state.ui.currentSpaceID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
