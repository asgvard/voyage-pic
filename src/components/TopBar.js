import React from 'react';
import {NavLink} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import View from './partials/FlexView';
import TopBarLink from './partials/TopBarLink';
import theme from '../theme';

const styles = {
  topBar: {
    height: 50,
    backgroundColor: theme.primary,
    boxShadow: '0px 0px 5px #000000'
  },
  logoWrapper: {
    flex: 1
  },
  logoLink: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    padding: 7
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  },
  navigationWrapper: {
    justifyContent: 'center',
    flex: 5
  },
  socialWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10
  },
  socialIconLink: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
    color: theme.textPrimaryLight
  }
};

const TopBar = () => <View horizontal style={styles.topBar}>
  <View style={styles.logoWrapper}>
    <NavLink style={styles.logoLink} to="/">
      <img style={styles.logo} src={require('../../public/logo.png')} alt={'Voyage Pic'} />
    </NavLink>
  </View>
  <View horizontal style={styles.navigationWrapper}>
    <TopBarLink to="/">{'Destinations'}</TopBarLink>
    <TopBarLink to="/prices">{'Prices'}</TopBarLink>
    <TopBarLink to="/about">{'About'}</TopBarLink>
    <TopBarLink to="/contacts">{'Contacts'}</TopBarLink>
    <TopBarLink to="/partners">{'Partners'}</TopBarLink>
  </View>
  <View horizontal style={styles.socialWrapper}>
    <a href={'https://www.instagram.com/voyage.pic'} target={'_blank'} style={styles.socialIconLink}>
      <FontAwesome name={'instagram'} />
    </a>
    <a href={'https://www.facebook.com/voyagepic'} target={'_blank'} style={styles.socialIconLink}>
      <FontAwesome name={'facebook-square'} />
    </a>
    <a href={'mailto:info@voyage-pic.com'} style={styles.socialIconLink}>
      <FontAwesome name={'envelope-o'} />
    </a>
  </View>
</View>;

export default TopBar;
