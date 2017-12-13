import { connect } from 'react-redux';
import { setFilterIcon, setFilterView } from '../../actions/ui_actions';
import SearchFloat from './searchFloat';


const mapStateToProps = (state) => {
  debugger;
  console.log('wtf');
  return {
    filterIconStatus: state.ui.filterIconStatus,
    filterViewStatus: state.ui.filterViewStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterIcon: (status) => dispatch(setFilterIcon(status)),
    setFilterView: (status) => dispatch(setFilterView(status))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFloat);
