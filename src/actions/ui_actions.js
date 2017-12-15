export const FILTER_ICON_STATUS = 'FILTER_ICON_STATUS';
export const FILTER_VIEW_STATUS = 'FILTER_VIEW_STATUS';
export const DRAWER_VIEW_STATUS = 'DRAWER_VIEW_STATUS';
export const CURRENT_SPACE_ID = 'CURRENT_SPACE_ID';

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
