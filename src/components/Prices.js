import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const Prices = (props) => <div>
  <div>
    <div>
      {'Для Вашего удобства, мы собрали цены по всем регионам и хотим предложить лучшие фотосессии по всему миру. Наши цены зависят от:\n\n- вида съемки;\n- места съемки в каждой отдельной стране;\n- количества локаций;\n- продолжительности съемки;\n- количества отснятых и отретушированных фото.\n\nПоэтому, сформированные ниже цены, детально обсуждаются перед заказом съемки. Мы постараемся учесть все Ваши пожелания и выполнить их на высоком профессиональном, и техническом уровне.'}
    </div>
  </div>
  <div>
    <div>
      {props.destinations.map((country, index) => <NavLink
        key={index}
        to={`/destinations/${country.key}`}
      >
        <div>
          <div>{country.title}</div>
          <div>{country.price}</div>
        </div>
      </NavLink>)}
    </div>
  </div>
</div>;

Prices.propTypes = {
  destinations: PropTypes.array.isRequired
};

export default Prices;
