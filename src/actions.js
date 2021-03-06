import {
  destinations as staticDestinations,
  photographers as staticPhotographers,
  partners as staticPartners
} from './static/data';

export const ACTION_TYPES = {
  LOAD_DESTINATIONS_REQUEST: 'LOAD_DESTINATIONS_REQUEST',
  LOAD_DESTINATIONS_SUCCESS: 'LOAD_DESTINATIONS_SUCCESS',
  LOAD_DESTINATIONS_FAILURE: 'LOAD_DESTINATIONS_FAILURE',
  LOAD_PHOTOGRAPHERS_REQUEST: 'LOAD_PHOTOGRAPHERS_REQUEST',
  LOAD_PHOTOGRAPHERS_SUCCESS: 'LOAD_PHOTOGRAPHERS_SUCCESS',
  LOAD_PHOTOGRAPHERS_FAILURE: 'LOAD_PHOTOGRAPHERS_FAILURE',
  LOAD_PORTFOLIO_REQUEST: 'LOAD_PORTFOLIO_REQUEST',
  LOAD_PORTFOLIO_SUCCESS: 'LOAD_PORTFOLIO_SUCCESS',
  LOAD_PORTFOLIO_FAILURE: 'LOAD_PORTFOLIO_FAILURE',
  LOAD_PARTNERS_REQUEST: 'LOAD_PARTNERS_REQUEST',
  LOAD_PARTNERS_SUCCESS: 'LOAD_PARTNERS_SUCCESS',
  LOAD_PARTNERS_FAILURE: 'LOAD_PARTNERS_FAILURE',
  INVOKE_FULLSCREEN_GALLERY: 'INVOKE_FULLSCREEN_GALLERY',
  GALLERY_NAVIGATE: 'GALLERY_NAVIGATE',
  CLOSE_GALLERY: 'CLOSE_GALLERY'
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

const loadPortfolioSuccess = (portfolio, photographer) => ({
  type: ACTION_TYPES.LOAD_PORTFOLIO_SUCCESS,
  payload: {
    portfolio,
    photographer
  }
});

const loadPortfolioFailure = (error) => ({
  type: ACTION_TYPES.LOAD_PORTFOLIO_FAILURE,
  payload: {
    error
  }
});

export const loadPortfolio = (photographer) => async (dispatch) => {
  try {
    dispatch({
      type: ACTION_TYPES.LOAD_PORTFOLIO_REQUEST
    });

    const portfolio = await fetch(`http://voyage-pic.com/portfolio.php?photographer=${photographer}`, {
      method: 'GET'
    }).then((response) => response.json());

    dispatch(loadPortfolioSuccess(portfolio.map(
      (photo) => `http://voyage-pic.com/public/images/portfolio/${photographer}/${photo}`), photographer));
  } catch (error) {
    dispatch(loadPortfolioFailure(error));
  }
};

export const invokeFullscreenGallery = (photographer, photoIndex) => ({
  type: ACTION_TYPES.INVOKE_FULLSCREEN_GALLERY,
  payload: {
    photographer,
    photoIndex
  }
});

export const galleryNavigate = (next = true) => ({
  type: ACTION_TYPES.GALLERY_NAVIGATE,
  payload: {
    next
  }
});

export const closeGallery = () => ({
  type: ACTION_TYPES.CLOSE_GALLERY
});

const loadPartnersSuccess = (partners) => ({
  type: ACTION_TYPES.LOAD_PARTNERS_SUCCESS,
  payload: {
    partners
  }
});

const loadPartnersFailure = (error) => ({
  type: ACTION_TYPES.LOAD_PARTNERS_FAILURE,
  payload: {
    error
  }
});

export const loadPartners = () => async (dispatch) => {
  try {
    dispatch({
      type: ACTION_TYPES.LOAD_PARTNERS_REQUEST
    });

    const partners = staticPartners;

    dispatch(loadPartnersSuccess(partners));
  } catch (error) {
    dispatch(loadPartnersFailure(error));
  }
};
