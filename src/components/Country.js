import React, {Component} from 'react';
import PropTypes from 'prop-types';
import View from './partials/FlexView';
import NotFound from './NotFound';
import theme from '../theme';

const styles = {
  content: {
    flex: 1,
    overflow: 'scroll'
  },
  countryWrapper: {
    flex: 1,
    minHeight: 280,
    maxHeight: 280,
    justifyContent: 'center',
    alignItems: 'center'
  },
  countryImageWrapper: {
    flex: 1,
    maxHeight: 280,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    position: 'relative'
  },
  countryImage: {
    maxHeight: 240,
    objectFit: 'cover'
  },
  countryTitle: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 3,
    textAlign: 'center',
    textDecoration: 'none',
    color: theme.textPrimaryLight
  },
  countryDescriptionWrapper: {
    flex: 2,
    padding: '2vw'
  },
  countryDescription: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    color: theme.textPrimary,
    fontSize: '1.6vw'
  },
  photographersWrapper: {
    textAlign: 'center'
  },
  photographerWrapper: {
    cursor: 'pointer',
    minWidth: 200,
    width: '40%',
    textAlign: 'center',
    display: 'inline-block',
    padding: '1vw',
    verticalAlign: 'top'
  },
  photographerAvatar: {
    width: 200,
    height: 200,
    position: 'relative',
    display: 'inline-block'
  },
  photographerImage: {
    minHeight: 196,
    minWidth: 196,
    maxHeight: 196,
    maxWidth: 196,
    objectFit: 'cover',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0)',
    opacity: 0.5
  },
  photographerImageActive: {
    borderColor: theme.accent,
    opacity: 1
  },
  photographerName: {
    position: 'absolute',
    bottom: 2,
    left: 2,
    right: 2,
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 3,
    textAlign: 'center',
    textDecoration: 'none',
    color: theme.textPrimaryLight,
    opacity: 0.5
  },
  photographerNameActive: {
    color: theme.accent,
    opacity: 1
  },
  portfolioWrapper: {
    padding: 10,
    textAlign: 'center'
  },
  portfolioImage: {
    height: 200,
    width: 200,
    objectFit: 'cover',
    cursor: 'pointer',
    padding: 1
  },
  photographerDescription: {
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.textPrimary,
    fontSize: '1vw',
    textAlign: 'justify',
    opacity: 0.5,
    padding: '2vw'
  },
  photographerDescriptionActive: {
    opacity: 1
  },
  noPhotographers: {
    flex: 1,
    textAlign: 'center',
    color: theme.textSecondary
  }
};

class Country extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photographer: null
    };

    this.onPhotographerSelected = this.onPhotographerSelected.bind(this);
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

  onPhotographerSelected(id) {
    if (id !== this.state.photographer) {
      this.setState({
        photographer: id
      }, () => {
        this.props.onPhotographerSelected(this.state.photographer);
      });
    }
  }

  renderPhotographer(photographer) {
    return (<div
      key={photographer.id}
      style={styles.photographerWrapper}
      onClick={() => {
        this.onPhotographerSelected(photographer.id);
      }}
    >
      <div style={styles.photographerAvatar}>
        <img style={photographer.id === this.state.photographer && this.props.photographers.length > 1 ? {
          ...styles.photographerImage,
          ...styles.photographerImageActive
        } : styles.photographerImage} src={photographer.image} alt={photographer.name} />
        <div style={photographer.id === this.state.photographer && this.props.photographers.length > 1 ? {
          ...styles.photographerName,
          ...styles.photographerNameActive
        } : styles.photographerName}>
          {photographer.name}
        </div>
      </div>
      <View style={photographer.id === this.state.photographer && this.props.photographers.length > 1 ? {
        ...styles.photographerDescription,
        ...styles.photographerDescriptionActive
      } : styles.photographerDescription}>
        {photographer.description}
      </View>
    </div>);
  }

  renderPortfolio() {
    if (!this.state.photographer || !this.props.portfolio[this.state.photographer]) {
      return null;
    }

    return (<div style={styles.portfolioWrapper}>
      {this.props.portfolio[this.state.photographer].map((photo, index) =>
        <img
          key={index}
          style={styles.portfolioImage}
          src={photo}
          alt={index}
          onClick={() => {
            this.props.onPhotoClicked(this.state.photographer, index);
          }}
        />)}
    </div>);
  }

  render() {
    if (!this.props.country) {
      return (<NotFound />);
    }

    return (<View style={styles.content}>
      <View horizontal style={styles.countryWrapper}>
        <View style={styles.countryImageWrapper}>
          <img style={styles.countryImage} src={this.props.country.image} alt={this.props.country.title} />
          <div style={styles.countryTitle}>
            {this.props.country.title}
          </div>
        </View>
        <View style={styles.countryDescriptionWrapper}>
          <View style={styles.countryDescription}>
            {'Познакомьтесь с нашей командой фотографов в данном регионе'}
          </View>
        </View>
      </View>
      {this.props.photographers.length === 0 && <View style={styles.noPhotographers}>
        {'Данные о фотографах в данном регионе временно недоступны.'}
      </View>}
      {this.props.photographers.length && <div style={styles.photographersWrapper}>
        {this.props.photographers.map((photographer) => this.renderPhotographer(photographer))}
      </div>}
      {this.renderPortfolio()}
    </View>);
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
