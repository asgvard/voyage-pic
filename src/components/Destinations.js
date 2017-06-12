import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import Footer from './partials/Footer';
import './Destinations.css';

const Destinations = (props) => <div className="page">
  <div className="destinations-background">
    <img src={require('../../resources/images/destinations-background.png')} alt="Destinations background"/>
  </div>
  <div className="destinations-content">
    <div className="top-spacer" />
    <div className="destinations-headline">
      <img src={require('../../resources/images/destinations-headline.jpg')} alt="Destinations"/>
      <div className="description">
        <h1>{'Фотосессии по всему миру'}</h1>
        <div>{'VoyagePic делает Ваш мир ярким как в душе, так и на картинках'}</div>
      </div>
    </div>
    <div className="destinations-gallery container">
      <h2>{'Регионы, в которых мы работаем'}</h2>
      {props.destinations.map((country) => <NavLink
        className={'link'}
        key={country.key}
        to={`/destinations/${country.key}`}
      >
        <img src={country.image} alt={country.title} />
        <div>
          {country.title}
        </div>
      </NavLink>)}
    </div>
    <Footer />
  </div>
</div>;

Destinations.propTypes = {
  destinations: PropTypes.array.isRequired
};

export default Destinations;
