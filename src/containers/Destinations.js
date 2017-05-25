import React from 'react';
import {connect} from 'react-redux';
import Destinations from '../components/Destinations';

const DestinationsContainer = (props) => <Destinations {...props} />;

const mapStateToProps = ({destinations}) => ({destinations});

export default connect(mapStateToProps, {})(DestinationsContainer);
