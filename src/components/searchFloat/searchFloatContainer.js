import { connect } from 'react-redux';
import { setFilterIcon, setFilterView, setFilterName } from '../../actions/ui_actions';
import SearchFloat from './searchFloat';


const mapStateToProps = (state) => {
  return {
    filterIconStatus: state.ui.filterIconStatus,
    filterViewStatus: state.ui.filterViewStatus,
    filterName: state.ui.filterName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterIcon: (status) => dispatch(setFilterIcon(status)),
    setFilterView: (status) => dispatch(setFilterView(status)),
    setFilterName: (filterName) => dispatch(setFilterName(filterName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFloat);
