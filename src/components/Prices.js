import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import View from './partials/FlexView';
import theme from '../theme';

const styles = {
  content: {
    flex: 1,
    overflow: 'auto'
  },
  descriptionWrapper: {
    padding: 30
  },
  description: {
    width: '60%',
    margin: 'auto',
    textAlign: 'justify',
    color: theme.textPrimary,
    fontSize: 18,
    whiteSpace: 'pre-wrap'
  },
  pricesWrapper: {
    padding: 20
  },
  prices: {
    width: '60%',
    margin: 'auto'
  },
  countryLink: {
    textDecoration: 'none'
  },
  priceRow: {
    height: 40,
    backgroundColor: theme.backgroundDarker
  },
  priceRowOdd: {
    backgroundColor: theme.backgroundColor
  },
  priceRowCountry: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    color: theme.textPrimary,
    fontSize: 20
  },
  priceRowValue: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    color: theme.textPrimary,
    fontSize: 20
  }
};

const Prices = (props) => <View style={styles.content}>
  <div style={styles.descriptionWrapper}>
    <div style={styles.description}>
      {'Для Вашего удобства, мы собрали цены по всем регионам и хотим предложить лучшие фотосессии по всему миру. Наши цены зависят от:\n\n- вида съемки;\n- места съемки в каждой отдельной стране;\n- количества локаций;\n- продолжительности съемки;\n- количества отснятых и отретушированных фото.\n\nПоэтому, сформированные ниже цены, детально обсуждаются перед заказом съемки. Мы постараемся учесть все Ваши пожелания и выполнить их на высоком профессиональном, и техническом уровне.'}
    </div>
  </div>
  <div style={styles.pricesWrapper}>
    <View style={styles.prices}>
      {props.destinations.map((country, index) => <NavLink
        style={styles.countryLink}
        key={index}
        to={`/destinations/${country.key}`}
      >
        <View
          horizontal
          style={index % 2 === 0 ? styles.priceRow : {
            ...styles.priceRow,
            ...styles.priceRowOdd
          }}
        >
          <View style={styles.priceRowCountry}>{country.title}</View>
          <View style={styles.priceRowValue}>{country.price}</View>
        </View>
      </NavLink>)}
    </View>
  </div>
</View>;

Prices.propTypes = {
  destinations: PropTypes.array.isRequired
};

export default Prices;
