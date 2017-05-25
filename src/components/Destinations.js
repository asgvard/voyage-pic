import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import View from './partials/FlexView';

const styles = {
  content: {
    width: '100%',
    height: '100%'
  },
  countryLink: {
    height: 220
  },
  image: {
    height: 200,
    width: 200,
    objectFit: 'cover'
  }
};

const Destinations = (props) => <View horizontal style={styles.content}>
  {props.destinations.map((country) => <NavLink
    key={country.key}
    style={styles.countryLink}
    to={`/destinations/${country.key}`}
  >
    <View>
      <img style={styles.image} src={country.image} alt={country.title} />
      {country.title}
    </View>
  </NavLink>)}
</View>;

Destinations.propTypes = {
  destinations: PropTypes.array.isRequired
};

export default Destinations;
