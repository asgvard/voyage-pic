import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, Route} from 'react-router-dom';
import View from './FlexView';
import theme from '../../theme';

const styles = {
  link: {
    width: 120,
    textDecoration: 'none',
    color: theme.textPrimaryLight,
    fontSize: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  linkContent: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: 'solid 4px transparent'
  },
  linkContentActive: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: 'solid 4px',
    borderBottomColor: theme.accent
  }
};

const TopBarLink = (props) => <Route
  path={props.to}
  children={({match}) => <NavLink
    style={styles.link}
    to={props.to}
    exact
  >
    <View style={match && match.isExact ? styles.linkContentActive : styles.linkContent}>{props.children}</View>
  </NavLink>}
/>;

TopBarLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default TopBarLink;
