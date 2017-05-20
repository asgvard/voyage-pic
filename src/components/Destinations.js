import React from 'react';
import {NavLink} from 'react-router-dom';
import View from './partials/FlexView';
import {destinations} from '../services/data';

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

const Destinations = () => <View horizontal style={styles.content}>
  {destinations.map((country) => <NavLink style={styles.countryLink} to={`/destinations/${country.key}`}>
    <View>
      <img style={styles.image} src={country.image} alt={country.title} />
      {country.title}
    </View>
  </NavLink>)}
</View>;

export default Destinations;
