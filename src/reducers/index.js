import { combineReducers } from 'redux';
import resultReducer from './reducer_result';
// Forming application state using reducer
const rootReducer = combineReducers({
  result: resultReducer,
});

export default rootReducer;
