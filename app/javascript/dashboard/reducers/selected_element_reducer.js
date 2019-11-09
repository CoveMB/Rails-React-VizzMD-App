import { ELEMENT_SELECTED } from '../actions/actionsTypes';

export default function(state = "", action) {
  switch (action.type) {
    case ELEMENT_SELECTED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
