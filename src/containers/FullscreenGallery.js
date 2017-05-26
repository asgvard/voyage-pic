import React from 'react';
import {connect} from 'react-redux';
import FullscreenGallery from '../components/FullscreenGallery';

const FullscreenGalleryContainer = (props) => <FullscreenGallery {...props} />;

const mapStateToProps = ({gallery, portfolio}) => ({
  ...gallery,
  portfolio
});

export default connect(mapStateToProps, {})(FullscreenGalleryContainer);
