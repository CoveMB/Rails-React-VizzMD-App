import { SET_PATIENT_AS_SELECTED } from '../actions/actionsTypes';

export default function(state = [], action) {
  switch (action.type) {
    case SET_PATIENT_AS_SELECTED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
