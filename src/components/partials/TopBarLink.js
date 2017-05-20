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
  linkText: {
    borderBottom: 'solid 4px transparent'
  },
  linkTextActive: {
    borderBottom: 'solid 4px',
    borderBottomColor: theme.textPrimaryLight
  }
};

const TopBarLink = (props) => <Route
  path={props.to}
  children={({match}) => <NavLink
    style={styles.link}
    to={props.to}
    exact
  >
    <View style={match && match.isExact ? styles.linkTextActive : styles.linkText}>{props.children}</View>
  </NavLink>}
/>;

TopBarLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default TopBarLink;
