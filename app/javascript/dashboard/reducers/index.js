import { combineReducers } from 'redux';
import MusclesReducer from './muscles_reducer';
import ReflexesReducer from './reflexes_reducer';
import SelectedReducer from './selected_element_reducer';
import BodyReducer from './body_reducer';
import TraitmentReducer from './traitment_reducer';

// State and reducers
const rootReducer = combineReducers({
  muscles: MusclesReducer,
  reflexes: ReflexesReducer,
  selectedElement: SelectedReducer,
  body: BodyReducer,
  traitment: TraitmentReducer
});

export default rootReducer;
