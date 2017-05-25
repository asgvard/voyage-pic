import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadDestinations} from '../actions';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%'
  }
};

class SplashContainer extends Component {
  componentDidMount() {
    this.props.loadDestinations();
  }

  render() {
    return(<div style={styles.wrapper}>
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
