import React from 'react';
import {connect} from 'react-redux';
import About from '../components/About';

const AboutContainer = (props) => <About {...props} />;

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(AboutContainer);
