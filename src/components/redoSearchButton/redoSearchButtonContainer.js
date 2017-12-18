import { connect } from 'react-redux';
import RedoSearchButton from './redoSearchButton';
import { setRedoSearchButton } from '../../actions/ui_actions';


const mapStateToProps = (state) => {
  return {
    redoSearchButtonStatus: state.ui.redoSearchButtonStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRedoSearchButton: (redoSearchButtonStatus) => dispatch(setRedoSearchButton(redoSearchButtonStatus))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RedoSearchButton);
