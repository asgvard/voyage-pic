import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {find} from 'lodash';
import Country from '../components/Country';
import {
  loadPhotographers,
  loadPortfolio,
  invokeFullscreenGallery
} from '../actions';

class CountryContainer extends Component {
  constructor(props) {
    super(props);

    this.onPhotographerSelected = this.onPhotographerSelected.bind(this);
    this.onPhotoClicked = this.onPhotoClicked.bind(this);
  }

  componentDidMount() {
    if (this.props.country && this.props.country.key) {
      this.props.loadPhotographers(this.props.country.key);
    }
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.country && newProps.country) {
      this.props.loadPhotographers(newProps.country.key);
    }
  }

  onPhotographerSelected(id) {
    this.props.loadPortfolio(id);
  }

  onPhotoClicked(photographer, photoIndex) {
    this.props.invokeFullscreenGallery(photographer, photoIndex);
  }

  render() {
    return (<Country
      {...this.props}
      onPhotographerSelected={this.onPhotographerSelected}
      onPhotoClicked={this.onPhotoClicked}
    />);
  }
}

CountryContainer.propTypes = {
  country: PropTypes.shape({
    key: PropTypes.string.isRequired
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      country: PropTypes.string
    }).isRequired
  }).isRequired,
  loadPortfolio: PropTypes.func.isRequired,
  loadPhotographers: PropTypes.func.isRequired,
  invokeFullscreenGallery: PropTypes.func.isRequired
};

CountryContainer.defaultProps = {
  country: null
};

const mapStateToProps = ({destinations, photographers, portfolio}, ownProps) => {
  const paramCountry = ownProps.match.params.country;
  const countryPhotographers = photographers[paramCountry] || [];

  return {
    country: find(destinations, (country) => paramCountry === country.key) || null,
    photographers: paramCountry ? countryPhotographers : [],
    portfolio
  };
};

export default connect(mapStateToProps, {
  loadPhotographers,
  loadPortfolio,
  invokeFullscreenGallery
})(CountryContainer);
