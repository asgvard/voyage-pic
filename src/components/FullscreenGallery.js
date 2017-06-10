import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FullscreenGallery extends Component {
  render() {
    if (!this.props.shown) {
      return null;
    }

    const photos = this.props.photographer && this.props.portfolio[this.props.photographer];
    const photoSource = photos && photos[this.props.photoIndex];

    return (<div>
      <div>
        <div>
          <div onClick={this.props.closeGallery}>
            <i className={'material-icons'}>{'close'}</i>
          </div>
        </div>
      </div>
      <div>
        <div>
          {photos && photos.length > 1 && this.props.photoIndex > 0 && <div
            onClick={() => {
              this.props.galleryNavigate(false);
            }}
          >
            <div>
              <i className={'material-icons'}>
                {'keyboard_arrow_left'}
              </i>
            </div>
          </div>}
        </div>
        <div>
          {photoSource && <img src={photoSource} alt={this.props.photoIndex} />}
        </div>
        <div>
          {photos && photos.length > 1 && this.props.photoIndex < (photos.length - 1) && <div
            onClick={() => {
              this.props.galleryNavigate(true);
            }}
          >
            <div>
              <i className={'material-icons'}>
                {'keyboard_arrow_right'}
              </i>
            </div>
          </div>}
        </div>
      </div>
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
