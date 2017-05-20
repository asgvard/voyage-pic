import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  flexVertical: {
    display: 'flex',
    flexDirection: 'column'
  },
  flexHorizontal: {
    display: 'flex',
    flexDirection: 'row'
  }
};

const View = (props) => <div style={
  props.horizontal ? {...styles.flexHorizontal, ...props.style} : {...styles.flexVertical, ...props.style}
}>{props.children}</div>;

View.propTypes = {
  horizontal: PropTypes.bool,
  style: PropTypes.object
};

export default View;
