import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import View from './partials/FlexView';
import theme from '../theme';

const styles = {
  content: {
    flex: 1,
    overflow: 'auto',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'center'
  },
  countryLink: {
    minHeight: 200,
    minWidth: 280,
    maxHeight: 200,
    maxWidth: 280,
    padding: 1
  },
  imageWrapper: {
    height: '100%',
    width: '100%',
    position: 'relative'
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  },
  imageTitle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 3,
    textAlign: 'center',
    textDecoration: 'none',
    color: theme.textPrimaryLight
  }
};

const Destinations = (props) => <View horizontal style={styles.content}>
  {props.destinations.map((country) => <NavLink
    key={country.key}
    style={styles.countryLink}
    to={`/destinations/${country.key}`}
  >
    <View style={styles.imageWrapper}>
      <img style={styles.image} src={country.image} alt={country.title} />
      <div style={styles.imageTitle}>
        {country.title}
      </div>
    </View>
  </NavLink>)}
</View>;

Destinations.propTypes = {
  destinations: PropTypes.array.isRequired
};

export default Destinations;
