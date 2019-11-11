import { combineReducers } from 'redux';
import UserPatientReducer from './patients_reducer';

// State and reducers
const rootReducer = combineReducers({
  userPatients: UserPatientReducer
});

export default rootReducer;
