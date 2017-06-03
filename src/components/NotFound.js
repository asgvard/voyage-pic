import React from 'react';
import View from './partials/FlexView';

const styles = {
  content: {
    width: '100%',
    height: '100%'
  }
};

const NotFound = () => <View style={styles.content}>{'404 Not Found'}</View>;

export default NotFound;
