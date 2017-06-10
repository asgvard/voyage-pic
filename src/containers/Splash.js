import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadDestinations} from '../actions';

class SplashContainer extends Component {
  componentDidMount() {
    this.props.loadDestinations();
  }

  render() {
    return(<div>
      {this.props.children}
    </div>);
  }
}

SplashContainer.propTypes = {
  loadDestinations: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
  loadDestinations
})(SplashContainer);
