import {ACTION_TYPES} from './actions';

const initialState = {
  destinations: [],
  photographers: {},
  portfolio: {},
  gallery: {
    shown: false,
    photographer: null,
    photoIndex: null
  }
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

  case ACTION_TYPES.LOAD_PORTFOLIO_SUCCESS: {
    return Object.assign({}, state, {
      portfolio: {
        ...state.portfolio,
        [action.payload.photographer]: action.payload.portfolio
      }
    });
  }

  case ACTION_TYPES.INVOKE_FULLSCREEN_GALLERY: {
    return Object.assign({}, state, {
      gallery: {
        shown: true,
        photographer: action.payload.photographer,
        photoIndex: action.payload.photoIndex
      }
    });
  }

  default:
    return state;
  }
}

export default appReducer;
