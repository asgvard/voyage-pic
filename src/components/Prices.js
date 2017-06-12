import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Footer from './partials/Footer';
import './Prices.css';

const Prices = (props) => <div className="page">
  <div className="prices">
    <div className="top-spacer" />
    <div className="prices-headline">
      <div className="container">
        <div className="prices-headline-description">
          <h2>{'Цены'}</h2>
          <div>
            {'Для Вашего удобства, мы собрали цены по всем регионам и хотим предложить лучшие фотосессии по всему миру. Наши цены зависят от:'}
            <br/>
            {'- вида съемки;'}
            <br/>
            {'- места съемки в каждой отдельной стране;'}
            <br/>
            {'- количества локаций;'}
            <br/>
            {'- продолжительности съемки;'}
            <br/>
            {'- количества отснятых и отретушированных фото.'}
            <br/>
            {'Поэтому, сформированные ниже цены, детально обсуждаются перед заказом съемки. Мы постараемся учесть все Ваши пожелания и выполнить их на высоком профессиональном, и техническом уровне.'}
          </div>
        </div>
        <div className="prices-headline-photo">
          <img src={require('../../resources/images/prices-headline.jpg')} alt="Prices"/>
        </div>
      </div>
    </div>
    <div className="prices-table">
      <div className="prices-table-note">
        {'* нажмите на строку, чтобы перейти на страницу региона'}
      </div>
      <table>
        <tbody>
          <tr>
            <th>{'Регион'}</th>
            <th>{'Стоимость'}</th>
          </tr>
          {props.destinations.map((country, index) => <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
            <td>
              <Link to={`/destinations/${country.key}`}>
                {country.title}
              </Link>
            </td>
            <td>
              <Link to={`/destinations/${country.key}`}>
                {country.price}
              </Link>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
    <Footer />
  </div>
</div>;

Prices.propTypes = {
  destinations: PropTypes.array.isRequired
};

export default Prices;
