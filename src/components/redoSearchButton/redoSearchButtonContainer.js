import { connect } from 'react-redux';
import RedoSearchButton from './redoSearchButton';
import { setRedoSearchButtonStatus } from '../../actions/ui_actions';


const mapStateToProps = (state) => {
  return {
    redoSearchButtonStatus: state.ui.redoSearchButtonStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRedoSearchButtonStatus: (redoSearchButtonStatus) => dispatch(setRedoSearchButtonStatus(redoSearchButtonStatus))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RedoSearchButton);
