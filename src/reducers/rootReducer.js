import { combineReducers } from 'redux';
import session from './session';
import ui from './ui';
import db from './db';

export default combineReducers({
  session, ui, db
});
