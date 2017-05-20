import React from 'react';
import {find} from 'lodash';
import {Redirect} from 'react-router-dom';
import View from './partials/FlexView';
import {destinations} from '../services/data';

const styles = {
  content: {
    width: '100%',
    height: '100%'
  }
};

const Country = (props) => {
  const country = find(destinations, (country) => country.key === props.match.params.country);

  if (!find(country)) {
    return <Redirect to={'/not-found'} />;
  }

  return <View style={styles.content}>{`Country: ${country.title}`}</View>;
};

export default Country;
