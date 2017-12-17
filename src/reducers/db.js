import merge from 'lodash/merge';
import { RECEIVE_WORKSPACES, RECEIVE_CURRENT_REVIEWS, RECEIVE_CURRENT_STATS } from '../actions/db_actions';

export const _initialdbState = {
  workspaces: [],
  currentReviews: [],
  currentStats: []
};

const dbReducer = (state = _initialdbState, action) => {
  console.log('in db reducer', state, action);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_WORKSPACES:
      return { workspaces: action.workspaces };
    case RECEIVE_CURRENT_REVIEWS:
      return merge({}, state, {currentReviews: action.currentReviews});
    case RECEIVE_CURRENT_STATS:
      return merge({}, state, {currentStats: action.currentStats});
    default:
      return state;
  }
};

export default dbReducer;
