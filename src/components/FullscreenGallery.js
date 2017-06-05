import React, {Component} from 'react';
import PropTypes from 'prop-types';
import View from './partials/FlexView';
import Button from './partials/Button';
import theme from '../theme';

const styles = {
  content: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  header: {
    height: 46,
    padding: 3,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  photoContainer: {
    flex: 1
  },
  closeButtonWrapper: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeButton: {
    height: 40,
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  closeButtonHighlighted: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)'
  },
  closeButtonIcon: {
    cursor: 'pointer',
    fontSize: 40,
    color: theme.textPrimaryLight
  },
  arrowWrapper: {
    minWidth: 60,
    cursor: 'pointer'
  },
  arrowButton: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  arrowButtonHighlighted: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)'
  },
  arrowIcon: {
    fontSize: 60,
    color: theme.textPrimaryLight
  },
  photoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  photoImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }
};

class FullscreenGallery extends Component {
  render() {
    if (!this.props.shown) {
      return null;
    }

    const photos = this.props.photographer && this.props.portfolio[this.props.photographer];
    const photoSource = photos && photos[this.props.photoIndex];

    return (<View style={styles.content}>
      <View horizontal style={styles.header}>
        <View style={styles.closeButtonWrapper}>
          <Button
            style={styles.closeButton}
            highlightedStyle={styles.closeButtonHighlighted}
            onClick={this.props.closeGallery}
          >
            <i
              style={styles.closeButtonIcon}
              className={'material-icons'}
            >{'close'}</i>
          </Button>
        </View>
      </View>
      <View horizontal style={styles.photoContainer}>
        <View
          style={styles.arrowWrapper}
        >
          {photos && photos.length > 1 && this.props.photoIndex > 0 && <Button
            style={styles.arrowButton}
            highlightedStyle={styles.arrowButtonHighlighted}
            onClick={() => {
              this.props.galleryNavigate(false);
            }}
          >
            <i
              style={styles.arrowIcon}
              className={'material-icons'}
            >
              {'keyboard_arrow_left'}
            </i>
          </Button>}
        </View>
        <View style={styles.photoWrapper}>
          {photoSource && <img style={styles.photoImage} src={photoSource} alt={this.props.photoIndex} />}
        </View>
        <View
          style={styles.arrowWrapper}
        >
          {photos && photos.length > 1 && this.props.photoIndex < (photos.length - 1) && <Button
            style={styles.arrowButton}
            highlightedStyle={styles.arrowButtonHighlighted}
            onClick={() => {
              this.props.galleryNavigate(true);
            }}
          >
            <i
              style={styles.arrowIcon}
              className={'material-icons'}
            >
              {'keyboard_arrow_right'}
            </i>
          </Button>}
        </View>
      </View>
    </View>);
  }
}

FullscreenGallery.propTypes = {
  shown: PropTypes.bool.isRequired,
  photographer: PropTypes.string,
  photoIndex: PropTypes.number,
  portfolio: PropTypes.object.isRequired,
  closeGallery: PropTypes.func.isRequired,
  galleryNavigate: PropTypes.func.isRequired
};

FullscreenGallery.defaultProps = {
  photographer: null,
  photoIndex: null
};

export default FullscreenGallery;
