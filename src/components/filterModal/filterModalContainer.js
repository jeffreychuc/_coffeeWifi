import { connect } from 'react-redux';
import { setFilterIcon, setFilterView } from '../../actions/ui_actions';
import FilterModal from './filterModal';


const mapStateToProps = (state) => {
  debugger;
  console.log('wtf');
  return {
    filterViewStatus: state.ui.filterViewStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterIcon: (status) => dispatch(setFilterIcon(status)),
    setFilterView: (status) => dispatch(setFilterView(status))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterModal);
