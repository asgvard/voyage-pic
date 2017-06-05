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
    minHeight: 240,
    justifyContent: 'center',
    alignItems: 'center'
  },
  countryImageWrapper: {
    minHeight: 200,
    minWidth: 280,
    maxHeight: 200,
    maxWidth: 280,
    position: 'relative'
  },
  countryImage: {
    minHeight: '100%',
    minWidth: '100%',
    objectFit: 'cover'
  },
  countryTitle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 3,
    textAlign: 'center',
    textDecoration: 'none',
    color: theme.textPrimaryLight
  },
  photographersWrapper: {
    minHeight: 220,
    justifyContent: 'center',
    alignItems: 'center'
  },
  photographerWrapper: {
    cursor: 'pointer',
    minHeight: 200,
    minWidth: 200,
    maxHeight: 200,
    maxWidth: 200,
    position: 'relative',
    padding: 2
  },
  photographerImage: {
    minHeight: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0)'
  },
  photographerImageActive: {
    borderColor: theme.accent
  },
  photographerName: {
    position: 'absolute',
    bottom: 4,
    left: 4,
    right: 4,
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 3,
    textAlign: 'center',
    textDecoration: 'none',
    color: theme.textPrimaryLight
  },
  photographerNameActive: {
    color: theme.accent
  },
  portfolioWrapper: {
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'center'
  },
  portfolioImage: {
    height: 200,
    width: 200,
    objectFit: 'cover',
    cursor: 'pointer',
    padding: 1
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
    return (<View
      key={photographer.id}
      style={styles.photographerWrapper}
      onClick={() => {
        this.onPhotographerSelected(photographer.id);
      }}
    >
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
    </View>);
  }

  renderPortfolio() {
    if (!this.state.photographer || !this.props.portfolio[this.state.photographer]) {
      return null;
    }

    return (<View horizontal style={styles.portfolioWrapper}>
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
    </View>);
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
      </View>
      {this.props.photographers.length === 0 && <View style={styles.noPhotographers}>
        {'Мы занимаемся поиском фотографов в данном регионе'}
      </View>}
      {this.props.photographers.length && <View horizontal style={styles.photographersWrapper}>
        {this.props.photographers.map((photographer) => this.renderPhotographer(photographer))}
      </View>}
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
