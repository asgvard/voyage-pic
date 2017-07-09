import React, {Component, PropTypes} from 'react';
import Footer from './partials/Footer';
import './Partners.css';

class Partners extends Component {
  renderPartner(partner, spacer) {
    return (<div key={partner.id} className="partner-block">
      <div className="partner-images">
        {partner.images.map((image, index) => <a key={index} className="partner-image-link" href={image.url}>
          <img  className="partner-image" src={image.image} alt={partner.id} />
        </a>)}
      </div>
      <div className="container partner-headline">
        {partner.description}
        {spacer && <div className="partner-spacer"></div>}
      </div>
    </div>);
  }

  render() {
    return (<div className="page">
      <div className="partners">
        <div className="top-spacer" />
        {this.props.partners.map((partner, index, partners) =>
          this.renderPartner(partner, index < partners.length - 2))}
        <Footer />
      </div>
    </div>);
  }
}

Partners.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })).isRequired
  })).isRequired
};

export default Partners;
