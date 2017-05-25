import React from 'react';
import {connect} from 'react-redux';
import Contacts from '../components/Contacts';

const ContactsContainer = (props) => <Contacts {...props} />;

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(ContactsContainer);
