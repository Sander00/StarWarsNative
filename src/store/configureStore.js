import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import mainReducer from './reducers/reducers';

const rootReducer = combineReducers({
  main: mainReducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
