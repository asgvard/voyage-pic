import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './FullscreenGallery.css';

class FullscreenGallery extends Component {
  render() {
    if (!this.props.shown) {
      return null;
    }

    const photos = this.props.photographer && this.props.portfolio[this.props.photographer];
    const photoSource = photos && photos[this.props.photoIndex];

    return (<div className="fullscreen-gallery">
      <div className="fullscreen-gallery-close-button" onClick={this.props.closeGallery}>
        <i className={'material-icons'}>{'close'}</i>
      </div>
      {photos && photos.length > 1 && this.props.photoIndex > 0 && <div
        className="fullscreen-gallery-left-button"
        onClick={() => {
          this.props.galleryNavigate(false);
        }}
      >
        <i className={'material-icons'}>
          {'keyboard_arrow_left'}
        </i>
      </div>}
      <div className="fullscreen-gallery-photo">
        {photoSource && <img src={photoSource} alt={this.props.photoIndex} />}
      </div>
      {photos && photos.length > 1 && this.props.photoIndex < (photos.length - 1) && <div
        className="fullscreen-gallery-right-button"
        onClick={() => {
          this.props.galleryNavigate(true);
        }}
      >
        <i className={'material-icons'}>
          {'keyboard_arrow_right'}
        </i>
      </div>}
    </div>);
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
