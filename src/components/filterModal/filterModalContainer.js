import { connect } from 'react-redux';
import { setFilterIcon, setFilterView, setFilterOutlet } from '../../actions/ui_actions';
import { fetchCurrentReviews } from '../../actions/db_actions';
import FilterModal from './filterModal';


const mapStateToProps = (state) => {
  return {
    filterViewStatus: state.ui.filterViewStatus,
    filterOutlets: state.ui.filterOutlets
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterIcon: (status) => dispatch(setFilterIcon(status)),
    setFilterView: (status) => dispatch(setFilterView(status)),
    setFilterOutlet: (value) => dispatch(setFilterOutlet(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterModal);
