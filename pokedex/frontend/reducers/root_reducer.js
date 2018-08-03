import { combineReducers } from 'redux';
import entitiesReducer from './entity_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui: uiReducer,
  errors: {}
});


export default rootReducer;
