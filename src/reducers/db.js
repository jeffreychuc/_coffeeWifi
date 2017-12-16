import merge from 'lodash/merge';
import { RECEIVE_WORKSPACES, RECEIVE_CURRENT_REVIEWS } from '../actions/db_actions';

export const _initialdbState = {
  workspaces: [],
  currentReviews: []
};

const dbReducer = (state = _initialdbState, action) => {
  console.log('in db reducer', state, action);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_WORKSPACES:
      return merge({}, state, { workspaces: action.workspaces });
    case RECEIVE_CURRENT_REVIEWS:
      return merge({}, state, {currentReviews: action.currentReviews});
    default:
      return state;
  }
};

export default dbReducer;
