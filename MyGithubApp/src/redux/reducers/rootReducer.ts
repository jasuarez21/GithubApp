
import {combineReducers} from 'redux';
import followersReducer from './followersReducer';
import reposReducer from './reposReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
  user: userReducer,
  followers: followersReducer,
  repos: reposReducer
});

export default rootReducer;