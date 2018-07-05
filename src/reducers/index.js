import { combineReducers } from 'redux';
import resultReducer from './reducer_result';

const rootReducer = combineReducers({
  result: resultReducer,
});

export default rootReducer;
