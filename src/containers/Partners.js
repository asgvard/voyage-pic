import React from 'react';
import {connect} from 'react-redux';
import Partners from '../components/Partners';

const PartnersContainer = (props) => <Partners {...props} />;

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(PartnersContainer);
