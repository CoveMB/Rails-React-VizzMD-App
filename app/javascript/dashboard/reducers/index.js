import { combineReducers } from 'redux';
import MusclesReducer from './muscles_reducer';
import MuscleReducer from './muscle_reducer';
import BodyReducer from './body_reducer';
import TraitmentReducer from './traitment_reducer';

// State and reducers
const rootReducer = combineReducers({
  muscles: MusclesReducer,
  selectedMuscle: MuscleReducer,
  body: BodyReducer,
  traitment: TraitmentReducer
});

export default rootReducer;
