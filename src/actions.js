import {
  destinations as staticDestinations,
  photographers as staticPhotographers
} from './static/data';

export const ACTION_TYPES = {
  LOAD_DESTINATIONS_REQUEST: 'LOAD_DESTINATIONS_REQUEST',
  LOAD_DESTINATIONS_SUCCESS: 'LOAD_DESTINATIONS_SUCCESS',
  LOAD_DESTINATIONS_FAILURE: 'LOAD_DESTINATIONS_FAILURE',
  LOAD_PHOTOGRAPHERS_REQUEST: 'LOAD_PHOTOGRAPHERS_REQUEST',
  LOAD_PHOTOGRAPHERS_SUCCESS: 'LOAD_PHOTOGRAPHERS_SUCCESS',
  LOAD_PHOTOGRAPHERS_FAILURE: 'LOAD_PHOTOGRAPHERS_FAILURE'
};

const loadDestinationsSuccess = (destinations) => ({
  type: ACTION_TYPES.LOAD_DESTINATIONS_SUCCESS,
  payload: {
    destinations
  }
});

const loadDestinationsFailure = (error) => ({
  type: ACTION_TYPES.LOAD_DESTINATIONS_FAILURE,
  payload: {
    error
  }
});

export const loadDestinations = () => async (dispatch) => {
  try {
    dispatch({
      type: ACTION_TYPES.LOAD_DESTINATIONS_REQUEST
    });

    const destinations = staticDestinations;

    dispatch(loadDestinationsSuccess(destinations));
  } catch (error) {
    dispatch(loadDestinationsFailure(error));
  }
};

const loadPhotographersSuccess = (photographers, country) => ({
  type: ACTION_TYPES.LOAD_PHOTOGRAPHERS_SUCCESS,
  payload: {
    photographers,
    country
  }
});

const loadPhotographersFailure = (error) => ({
  type: ACTION_TYPES.LOAD_PHOTOGRAPHERS_FAILURE,
  payload: {
    error
  }
});

export const loadPhotographers = (country) => async (dispatch) => {
  try {
    dispatch({
      type: ACTION_TYPES.LOAD_PHOTOGRAPHERS_REQUEST
    });

    const photographers = staticPhotographers[country] || [];

    dispatch(loadPhotographersSuccess(photographers, country));
  } catch (error) {
    dispatch(loadPhotographersFailure(error));
  }
};
