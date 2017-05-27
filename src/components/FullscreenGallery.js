import React, {Component} from 'react';
import PropTypes from 'prop-types';
import View from './partials/FlexView';

const styles = {
  content: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: 'rgba(180, 180, 180, 0.8)'
  },
  header: {
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  photoContainer: {
    flex: 1
  },
  closeButton: {

  },
  leftArrow: {
    justifyContent: 'center'
  },
  rightArrow: {
    justifyContent: 'center'
  },
  photoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  photoImageWrapper: {
    flex: 1
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
        <div
          style={styles.closeButton}
          onClick={this.props.closeGallery}
        >
          {'X'}
        </div>
      </View>
      <View horizontal style={styles.photoContainer}>
        {photos && photos.length > 1 && this.props.photoIndex > 0 &&
          <View
            style={styles.leftArrow}
            onClick={() => {
              this.props.galleryNavigate(false);
            }}
          >
            {'<'}
          </View>
        }
        <View style={styles.photoWrapper}>
          {photoSource && <img style={styles.photoImage} src={photoSource} alt={this.props.photoIndex} />}
        </View>
        {photos && photos.length > 1 && this.props.photoIndex < (photos.length - 1) &&
          <View
            style={styles.rightArrow}
            onClick={() => {
              this.props.galleryNavigate(true);
            }}
          >
            {'>'}
          </View>
        }
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
