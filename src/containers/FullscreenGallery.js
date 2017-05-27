import React from 'react';
import {connect} from 'react-redux';
import FullscreenGallery from '../components/FullscreenGallery';
import {
  galleryNavigate,
  closeGallery
} from '../actions';

const FullscreenGalleryContainer = (props) => <FullscreenGallery {...props} />;

const mapStateToProps = ({gallery, portfolio}) => ({
  ...gallery,
  portfolio
});

export default connect(mapStateToProps, {
  galleryNavigate,
  closeGallery
})(FullscreenGalleryContainer);
