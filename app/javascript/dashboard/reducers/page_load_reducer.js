import { PAGE_LOADED } from '../actions/actionsTypes';

export default function(state = true, action) {
  switch (action.type) {
    case PAGE_LOADED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
