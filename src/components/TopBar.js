import React from 'react';
import {NavLink} from 'react-router-dom';
import TopBarLink from './partials/TopBarLink';
import './TopBar.css';

const TopBar = () => <div className="top-bar">
  <div className="container">
    <div className="top-bar-logo">
      <NavLink to="/">
        <img src={require('../../resources/images/logo.png')} alt={'Voyage Pic'} />
      </NavLink>
    </div>
    <div className="top-bar-links-container">
      <TopBarLink to="/">
        <div>{'Регионы'}</div>
      </TopBarLink>
      <TopBarLink to="/prices">
        <div>{'Цены'}</div>
      </TopBarLink>
      <TopBarLink to="/contacts">
        <div>{'Контакты'}</div>
      </TopBarLink>
      <TopBarLink to="/feedback">
        <div>{'Отзывы'}</div>
      </TopBarLink>
      <TopBarLink to="/partners">
        <div>{'Партнеры'}</div>
      </TopBarLink>
    </div>
  </div>
</div>;

export default TopBar;
