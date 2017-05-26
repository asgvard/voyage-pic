import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'lodash';

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

const View = (props) => <div
  style={
    props.horizontal ? {...styles.flexHorizontal, ...props.style} : {...styles.flexVertical, ...props.style}
  }
  {...omit(props, ['style', 'horizontal'])}
>{props.children}</div>;

View.propTypes = {
  horizontal: PropTypes.bool,
  style: PropTypes.object
};

export default View;
