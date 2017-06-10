import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, Route} from 'react-router-dom';

const TopBarLink = (props) => <Route
  path={props.to}
  children={({match}) => <NavLink
    className="top-bar-link"
    to={props.to}
    exact
  >
    {props.children}
  </NavLink>}
/>;

TopBarLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default TopBarLink;
