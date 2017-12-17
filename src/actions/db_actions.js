import * as dbAPIUtil from '../util/db_api_util';
export const RECEIVE_WORKSPACES = 'RECEIVE_WORKSPACES';
export const RECEIVE_CURRENT_REVIEWS = 'RECEIVE_CURRENT_REVIEWS';

export const receiveWorkspaces = workspaces => ({
  type: RECEIVE_WORKSPACES,
  workspaces
});

export const fetchLocalWorkspaces = (location, radius) => dispatch => {
  console.log('location, radius');
  return dbAPIUtil.fetchLocalWorkspaces(location, radius).then(workspaces => dispatch(receiveWorkspaces(workspaces)));
};

export const receiveCurrentReviews = currentReviews => ({
  type: RECEIVE_CURRENT_REVIEWS,
  currentReviews
});

export const fetchCurrentReviews = (businessID) => dispatch => (
  dbAPIUtil.fetchBusinessReviews(businessID).then(currentReviews => dispatch(receiveCurrentReviews(currentReviews)))
);

export const receiveBusinessStats = (businessID) => dispatch => (
  dbAPIUtil.fetchBusinessStats(businessID).then(stats => dispatch(receiveBusinessStats(stats)))
)
