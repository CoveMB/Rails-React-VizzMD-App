import { combineReducers } from 'redux';
import MusclesReducer from './muscles_reducer';
import MuscleReducer from './muscle_reducer';
import BodyReducer from './body_reducer';
import PageLoadReducer from './page_load_reducer';
import EmptyReducer from './empty_reducer';

// State and reducers
const rootReducer = combineReducers({
  firstPageLoad: PageLoadReducer,
  muscles: MusclesReducer,
  selectedMuscle: MuscleReducer,
  body: BodyReducer,
  patientId: EmptyReducer,
  user: EmptyReducer
});

export default rootReducer;
