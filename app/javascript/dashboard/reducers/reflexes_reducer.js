import { REFLEX_CHANGED } from '../actions/actionsTypes';

export default function(state = null, action) {
  switch (action.type) {
    case REFLEX_CHANGED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
