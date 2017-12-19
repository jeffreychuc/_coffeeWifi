import * as dbAPIUtil from '../util/db_api_util';
export const RECEIVE_WORKSPACES = 'RECEIVE_WORKSPACES';
export const RECEIVE_CURRENT_REVIEWS = 'RECEIVE_CURRENT_REVIEWS';
export const RECEIVE_CURRENT_STATS = 'RECEIVE_CURRENT_STATS';

export const receiveWorkspaces = workspaces => ({
  type: RECEIVE_WORKSPACES,
  workspaces
});

export const fetchLocalWorkspaces = (location, radius) => dispatch => {
  return dbAPIUtil.fetchLocalWorkspaces(location, radius).then((data) => {debugger; return data;}).then(workspaces => dispatch(receiveWorkspaces(workspaces)));
};

export const receiveCurrentReviews = currentReviews => ({
  type: RECEIVE_CURRENT_REVIEWS,
  currentReviews
});

export const fetchCurrentReviews = (businessID) => dispatch => (
  dbAPIUtil.fetchBusinessReviews(businessID).then(currentReviews => dispatch(receiveCurrentReviews(currentReviews)))
);

export const receiveCurrentStats = currentStats => ({
  type: RECEIVE_CURRENT_STATS,
  currentStats
});

export const fetchCurrentStats = (businessID) => dispatch => (
  dbAPIUtil.fetchBusinessStats(businessID).then(stats => dispatch(receiveCurrentStats(stats)))
);

export const filterWorkspaces = (filters) => dispatch => (
  dbAPIUtil.filterWorkspaces(filters).then((data) => {debugger; return data;}).then(workspaces => dispatch(receiveWorkspaces(workspaces)))
);
