import { combineReducers } from 'redux';
import session from './session';
import ui from './ui';

export default combineReducers({
  session, ui
});
