import {ACTION_TYPES} from './actions';

const initialState = {
  destinations: [],
  photographers: {}
};

function appReducer(state = initialState, action) {
  switch (action.type) {

  case ACTION_TYPES.LOAD_DESTINATIONS_SUCCESS: {
    return Object.assign({}, state, {
      destinations: action.payload.destinations
    });
  }

  case ACTION_TYPES.LOAD_PHOTOGRAPHERS_SUCCESS: {
    return Object.assign({}, state, {
      photographers: {
        ...state.photographers,
        [action.payload.country]: action.payload.photographers
      }
    });
  }

  default:
    return state;
  }
}

export default appReducer;
