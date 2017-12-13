export const FILTER_ICON_STATUS = 'FILTER_ICON_STATUS';
export const FILTER_VIEW_STATUS = 'FILTER_VIEW_STATUS';

export const setFilterStatus = (filterIconStatus) => ({
  type: FILTER_ICON_STATUS,
  filterIconStatus
});

export const setFilterIcon = (status) => dispatch => (
  dispatch(setFilterStatus(status))
);


export const setFilterViewStatus = (filterViewStatus) => ({
  type: FILTER_VIEW_STATUS,
  filterViewStatus
});

export const setFilterView = (status) => dispatch => (
  dispatch(setFilterViewStatus(status))
);
