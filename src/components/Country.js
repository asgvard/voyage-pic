import React, {Component} from 'react';
import PropTypes from 'prop-types';
import View from './partials/FlexView';
import NotFound from './NotFound';

const styles = {
  content: {
    width: '100%',
    height: '100%',
    overflow: 'scroll'
  },
  countryWrapper: {
    minHeight: 250
  },
  countryImage: {
    height: 200,
    width: 200,
    objectFit: 'cover'
  },
  photographersWrapper: {
    minHeight: 280
  },
  photographerWrapper: {
    cursor: 'pointer'
  },
  photographerImage: {
    height: 200,
    width: 200,
    objectFit: 'cover'
  },
  photographerNameActive: {
    backgroundColor: 'grey'
  },
  portfolioWrapper: {
    flexWrap: 'wrap'
  },
  portfolioImage: {
    height: 200,
    width: 200,
    objectFit: 'cover',
    cursor: 'pointer'
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
      <img style={styles.photographerImage} src={photographer.image} alt={photographer.name} />
      <div style={photographer.id === this.state.photographer ? styles.photographerNameActive : {}}>
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
      <View style={styles.countryWrapper}>
        <img style={styles.countryImage} src={this.props.country.image} alt={this.props.country.title} />
        {this.props.country.title}
      </View>
      <View horizontal style={styles.photographersWrapper}>
        {this.props.photographers.map((photographer) => this.renderPhotographer(photographer))}
      </View>
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
