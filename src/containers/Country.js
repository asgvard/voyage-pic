import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {find} from 'lodash';
import Country from '../components/Country';
import {loadPhotographers} from '../actions';

class CountryContainer extends Component {
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
    console.log(id);
  }

  render() {
    return (<Country
      {...this.props}
      onPhotographerSelected={this.onPhotographerSelected}
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
  }).isRequired
};

CountryContainer.defaultProps = {
  country: null
};

const mapStateToProps = ({destinations, photographers}, ownProps) => {
  const paramCountry = ownProps.match.params.country;
  const countryPhotographers = photographers[paramCountry] || [];

  return {
    country: find(destinations, (country) => paramCountry === country.key) || null,
    photographers: paramCountry ? countryPhotographers : []
  };
};

export default connect(mapStateToProps, {
  loadPhotographers
})(CountryContainer);
