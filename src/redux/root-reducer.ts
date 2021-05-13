import {combineReducers} from 'redux';
import UIReducer from './reducers/ui.reducer';

const rootReducer = combineReducers({
  ui: UIReducer,
});

export default rootReducer;
