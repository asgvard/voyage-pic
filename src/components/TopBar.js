import React from 'react';
import {NavLink} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import View from './partials/FlexView';
import TopBarLink from './partials/TopBarLink';
import theme from '../theme';

const styles = {
  topBar: {
    height: '5vw',
    backgroundColor: theme.primary,
    boxShadow: '0px 0px 5px #000000',
    zIndex: 3
  },
  logoWrapper: {
    flex: 1
  },
  logoLink: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    padding: '1.4vw'
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  },
  navigationWrapper: {
    justifyContent: 'center',
    flex: 3,
    paddingLeft: '2vw',
    paddingRight: '2vw'
  },
  socialWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  socialIconLink: {
    paddingLeft: '2vw',
    paddingRight: '2vw',
    fontSize: '1.8vw',
    color: theme.textPrimaryLight
  },
  topBarLinkText: {
    fontSize: '1.4vw'
  }
};

const TopBar = () => <View horizontal style={styles.topBar}>
  <View style={styles.logoWrapper}>
    <NavLink style={styles.logoLink} to="/">
      <img style={styles.logo} src={require('../../resources/images/logo.png')} alt={'Voyage Pic'} />
    </NavLink>
  </View>
  <View horizontal style={styles.navigationWrapper}>
    <TopBarLink to="/">
      <div style={styles.topBarLinkText}>{'Регионы'}</div>
    </TopBarLink>
    <TopBarLink to="/prices">
      <div style={styles.topBarLinkText}>{'Цены'}</div>
    </TopBarLink>
    <TopBarLink to="/about">
      <div style={styles.topBarLinkText}>{'О нас'}</div>
    </TopBarLink>
    <TopBarLink to="/contacts">
      <div style={styles.topBarLinkText}>{'Контакты'}</div>
    </TopBarLink>
    <TopBarLink to="/partners">
      <div style={styles.topBarLinkText}>{'Партнеры'}</div>
    </TopBarLink>
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
