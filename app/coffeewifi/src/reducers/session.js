import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER, CLEAR_CURRENT_USER, RECEIVE_CURRENT_USER_PROFILE
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    debugger;
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    case CLEAR_CURRENT_USER:
      return merge({}, _nullUser, {currentUserProfile: null});
    case RECEIVE_CURRENT_USER_PROFILE:
      console.log(action);
      const currentUserProfile = action.currentUserProfile;
      return merge({}, state, { currentUserProfile });
    default:
      return state;
  }
};

export default sessionReducer;
