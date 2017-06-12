import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isEmpty, findIndex} from 'lodash';
import NotFound from './NotFound';
import Footer from './partials/Footer';
import './Country.css';

class Country extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photographer: null,
      suppressRotation: false
    };

    this.onPhotographerSelected = this.onPhotographerSelected.bind(this);

    this.rotationInterval = setInterval(() => {
      const currentIndex = findIndex(this.props.photographers, (photographer) =>
        this.state.photographer === photographer.id);

      if (currentIndex > -1) {
        if (this.props.photographers[currentIndex + 1]) {
          this.onPhotographerSelected(this.props.photographers[currentIndex + 1].id);
        } else if (this.props.photographers.length > 1 && currentIndex === this.props.photographers.length - 1) {
          this.onPhotographerSelected(this.props.photographers[0].id);
        }
      }
    }, 7000);
  }

  componentDidMount() {
    if (this.props.photographers.length && !this.state.photographer) {
      this.onPhotographerSelected(this.props.photographers[0].id);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.photographers !== newProps.photographers
      && newProps.photographers.length
      && !this.state.photographer
    ) {
      this.onPhotographerSelected(newProps.photographers[0].id);
    }
  }

  componentWillUnmount() {
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
    }
  }

  onPhotographerSelected(id, manual = false) {
    if (manual === true) {
      this.setState({
        suppressRotation: true
      });

      if (this.rotationInterval) {
        clearInterval(this.rotationInterval);
      }
    }

    if (id !== this.state.photographer) {
      this.setState({
        photographer: id
      }, () => {
        this.props.onPhotographerSelected(this.state.photographer);
      });
    }
  }

  renderPhotographer(photographer) {
    const isActive = photographer.id === this.state.photographer;
    const isOnly = this.props.photographers.length === 1;
    const isPhoto = !isEmpty(photographer.image);
    const isCv = !isEmpty(photographer.description);

    return (<div
      className={`country-photographer ${isOnly ? 'only' : 'multiple'}
        ${isActive ? 'active' : ''} ${isCv ? '' : 'no-cv'} ${isPhoto ? '' : 'no-photo'}`}
      key={photographer.id}
      onClick={() => {
        this.onPhotographerSelected(photographer.id, true);
      }}
    >
      <div className="country-photographer-avatar">
        <img
          src={isPhoto ? photographer.image : require('../../resources/images/no-photo.png')}
          alt={photographer.name}
        />
        <div>
          {photographer.name}
        </div>
      </div>
      <div className="country-photographer-cv">
        {photographer.description}
      </div>
    </div>);
  }

  renderPortfolio() {
    if (!this.state.photographer || !this.props.portfolio[this.state.photographer]) {
      return null;
    }

    return (<div className="country-portfolio">
      {this.props.portfolio[this.state.photographer].map((photo, index) => <div
        key={index}
        className="country-portfolio-photo"
      >
        <img
          key={index}
          src={photo}
          alt={index}
          onClick={() => {
            this.props.onPhotoClicked(this.state.photographer, index);
          }}
        />
      </div>)}
    </div>);
  }

  render() {
    if (!this.props.country) {
      return (<NotFound />);
    }

    const photographersMessage = this.props.photographers.length === 0 ?
      'Информация о фотографах в данном регионе временно недоступна' :
      'Наши фотографы в данном регионе';

    return (<div className="page">
      <div className="country-main">
        <div className="top-spacer" />
        <div className="country-headline">
          <div className="country-headline-poster container">
            <img src={this.props.country.image} alt={this.props.country.title} />
            <div className="country-headline-description">
              <h1>{this.props.country.title}</h1>
              <div>{photographersMessage}</div>
            </div>
          </div>
        </div>
        {this.props.photographers.length > 0 && <div className="country-photographers">
          {this.props.photographers.map((photographer) => this.renderPhotographer(photographer))}
        </div>}
        <div className="clear" />
        {this.renderPortfolio()}
        <Footer />
      </div>
    </div>);
  }
}

Country.propTypes = {
  country: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  photographers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })).isRequired,
  onPhotographerSelected: PropTypes.func.isRequired,
  portfolio: PropTypes.object.isRequired,
  onPhotoClicked: PropTypes.func.isRequired
};

Country.defaultProps = {
  country: null
};

export default Country;
