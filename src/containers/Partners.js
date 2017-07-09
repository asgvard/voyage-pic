import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Partners from '../components/Partners';
import {loadPartners} from '../actions';

class PartnersContainer extends Component {
  componentDidMount() {
    this.props.loadPartners();
  }

  render() {
    return (<Partners {...this.props} />);
  }
}

PartnersContainer.propTypes = {
  loadPartners: PropTypes.func.isRequired
};

const mapStateToProps = ({partners}) => ({partners});

export default connect(mapStateToProps, {
  loadPartners
})(PartnersContainer);
