export const FILTER_ICON_STATUS = 'FILTER_ICON_STATUS';
export const FILTER_VIEW_STATUS = 'FILTER_VIEW_STATUS';
export const DRAWER_VIEW_STATUS = 'DRAWER_VIEW_STATUS';
export const CURRENT_SPACE_ID = 'CURRENT_SPACE_ID';
export const REDOSEARCH_BUTTON_STATUS = 'REDOSEARCH_BUTTON_STATUS';
export const CURRENT_FILTERS = 'CURRENT_FILTERS';
export const FILTER_NAME = 'FILTER_NAME';
export const FILTER_OUTLET = 'FILTER_OUTLET';

export const setFilterStatus = (filterIconStatus) => ({
  type: FILTER_ICON_STATUS,
  filterIconStatus
});

export const setFilterViewStatus = (filterViewStatus) => ({
  type: FILTER_VIEW_STATUS,
  filterViewStatus
});

export const setDrawerViewStatus = (drawerViewStatus) => ({
  type: DRAWER_VIEW_STATUS,
  drawerViewStatus
});

export const setCurrentSpaceID = (ID) => ({
  type: CURRENT_SPACE_ID,
  currentSpaceID: ID
});

export const setFilterIcon = (status) => (dispatch) => (
  dispatch(setFilterStatus(status))
);

export const setFilterView = (status) => (dispatch) => (
  dispatch(setFilterViewStatus(status))
);

export const setDrawerView = (status) => (dispatch) => (
  dispatch(setDrawerViewStatus(status))
);

export const setCurrentSpaceView = (ID) => (dispatch) => (
  dispatch(setCurrentSpaceID(ID))
);

export const setRedoSearchButtonStatus = (redoSearchButtonStatus) => ({
  type: REDOSEARCH_BUTTON_STATUS,
  redoSearchButtonStatus
});

export const setRedoSearchButton = (redoSearchButtonStatus) => (dispatch) => (
  dispatch(setRedoSearchButtonStatus(redoSearchButtonStatus)
));

export const setCurrentFilterValues = (currentFilters) => ({
  type: CURRENT_FILTERS,
  currentFilters
});

export const setCurrentFilters = (currentFilters) => (dispatch) => (
  dispatch(setCurrentFilterValues(currentFilters))
);

export const setFilterNameValue = (filterName) => ({
  type: FILTER_NAME,
  filterName
});

export const setFilterName = (filterName) => (dispatch) => (
  dispatch(setFilterNameValue(filterName))
);

export const setFilterOutletValue = (filterOutlet) => ({
  type: FILTER_OUTLET,
  filterOutlet
});

export const setFilterOutlet = (value) => (dispatch) => (
  dispatch(setFilterOutletValue(value))
);
