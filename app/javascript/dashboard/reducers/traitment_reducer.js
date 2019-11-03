import { SET_TRAITMENT } from '../actions/actionsTypes';

export default function(state = {traitment: "", note: ""}, action) {
  switch (action.type) {
    case SET_TRAITMENT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
