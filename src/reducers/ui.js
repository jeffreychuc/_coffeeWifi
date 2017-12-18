import merge from 'lodash/merge';
import { FILTER_ICON_STATUS,
         FILTER_VIEW_STATUS,
         DRAWER_VIEW_STATUS,
         CURRENT_SPACE_ID,
         REDOSEARCH_BUTTON_STATUS,
         CURRENT_FILTERS,
         FILTER_NAME
        } from '../actions/ui_actions';

export const _initialUIState = {
  filterIconStatus: false,
  filterViewStatus: false,
  drawerViewStatus: false,
  redoSearchButtonStatus: false,
  currentSpaceID: null,
  filterName: undefined,
  filterOutlets: undefined
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
    case CURRENT_SPACE_ID:
      return merge({}, state, {currentSpaceID: action.currentSpaceID});
    case REDOSEARCH_BUTTON_STATUS:
      return merge({}, state, {redoSearchButtonStatus: action.redoSearchButtonStatus});
    case FILTER_NAME:
      return merge({}, state, {filterName: action.filterName});
    default:
      return state;
  }
};

export default uiReducer;
