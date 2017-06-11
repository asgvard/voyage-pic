import React from 'react';
import {connect} from 'react-redux';
import Feedback from '../components/Feedback';

const FeedbackContainer = (props) => <Feedback {...props} />;

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(FeedbackContainer);
