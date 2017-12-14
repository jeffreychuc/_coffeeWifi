import { connect } from 'react-redux';
import { setDrawerView } from '../../actions/ui_actions';
import Drawer from './drawer';


const mapStateToProps = (state) => {
  return {
    drawerViewStatus: state.ui.drawerViewStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDrawerView: (status) => dispatch(setDrawerView(status))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
