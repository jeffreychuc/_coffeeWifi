import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';
export const RECEIVE_CURRENT_USER_PROFILE = 'RECEIVE_CURRENT_USER_PROFILE';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const clearCurrentUser = currentUser => ({
  type: CLEAR_CURRENT_USER,
  currentUser : {}
});

export const receiveCurrentProfile = currentUserProfile => ({
  type: RECEIVE_CURRENT_USER_PROFILE,
  currentUserProfile
});

export const login = () => dispatch => (
  APIUtil.login().then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(() => dispatch(clearCurrentUser()))
);

export const getUserProfile = (accessToken) => dispatch => (
  APIUtil.getUserProfile(accessToken).then(currentUserProfile => dispatch(receiveCurrentProfile(currentUserProfile)))
);
