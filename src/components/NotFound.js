import React from 'react';
import View from './partials/FlexView';
import theme from '../theme';

const styles = {
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.textSecondary
  }
};

const NotFound = () => <View style={styles.content}>{'404 Page Not Found'}</View>;

export default NotFound;
