import React from 'react';
import {connect} from 'react-redux';
import Prices from '../components/Prices';

const PricesContainer = (props) => <Prices {...props} />;

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(PricesContainer);
