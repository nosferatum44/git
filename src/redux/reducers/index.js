import { combineReducers } from 'redux';

import userReducer from './userReducer';
import repositoriesReducer from './repositoriesReducer';
import commitsReducer from './commitsReducer';

export default combineReducers({
  user: userReducer,
  repositories: repositoriesReducer,
  commits: commitsReducer,
});
