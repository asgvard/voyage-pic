import React, {Component} from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: 'grey',
    opacity: 0.5
  }
};

class FullscreenGallery extends Component {
  render() {
    if (!this.props.shown) {
      return null;
    }

    return (<div style={styles.content}>{'FullscreenGallery'}</div>);
  }
}

FullscreenGallery.propTypes = {
  shown: PropTypes.bool.isRequired,
  photographer: PropTypes.string,
  photoIndex: PropTypes.number,
  portfolio: PropTypes.object.isRequired
};

FullscreenGallery.defaultProps = {
  photographer: null,
  photoIndex: null
};

export default FullscreenGallery;
