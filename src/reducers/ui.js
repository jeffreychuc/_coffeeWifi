import merge from 'lodash/merge';
import { FILTER_ICON_STATUS, FILTER_VIEW_STATUS, DRAWER_VIEW_STATUS } from '../actions/ui_actions';

export const _initialUIState = {
  filterIconStatus: false,
  filterViewStatus: false,
  drawerViewStatus: false,
};

const uiReducer = (state = _initialUIState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case FILTER_ICON_STATUS:
      return merge({}, state, { filterIconStatus: action.filterIconStatus });
    case FILTER_VIEW_STATUS:
      return merge({}, state, { filterViewStatus: action.filterViewStatus });
    case DRAWER_VIEW_STATUS:
      return merge({}, state, { drawerViewStatus: action.drawerViewStatus });
    default:
      return state;
  }
};

export default uiReducer;
