import React from 'react';
import {NavLink} from 'react-router-dom';

const styles = {
  linkActive: {
    backgroundColor: 'gray'
  }
};

const TopBar = () => <ul>
  <li><NavLink activeStyle={styles.linkActive} exact to="/">Home</NavLink></li>
  <li><NavLink activeStyle={styles.linkActive} to="/destinations">Destinations</NavLink></li>
  <li><NavLink activeStyle={styles.linkActive} to="/contacts">Contacts</NavLink></li>
</ul>;

export default TopBar;
