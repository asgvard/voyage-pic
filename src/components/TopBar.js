import React from 'react';
import View from './partials/FlexView';
import TopBarLink from './partials/TopBarLink';
import theme from '../theme';

const styles = {
  topBar: {
    justifyContent: 'space-around',
    height: 50,
    backgroundColor: theme.primary,
    boxShadow: '0px 0px 5px #000000'
  }
};

const TopBar = () => <View horizontal style={styles.topBar}>
  <TopBarLink to="/">Home</TopBarLink>
  <TopBarLink to="/destinations">Destinations</TopBarLink>
  <TopBarLink to="/contacts">Contacts</TopBarLink>
</View>;

export default TopBar;
