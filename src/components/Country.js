import React, {Component} from 'react';
import PropTypes from 'prop-types';
import View from './partials/FlexView';
import NotFound from './NotFound';

const styles = {
  content: {
    width: '100%',
    height: '100%'
  },
  countryImage: {
    height: 200,
    width: 200,
    objectFit: 'cover'
  }
};

class Country extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photographer: null
    };
  }

  componentDidMount() {
    if (this.props.photographers.length && !this.state.photographer) {
      this.setState({
        photographer: this.props.photographers[0].id
      }, () => {
        this.props.onPhotographerSelected(this.state.photographer);
      });
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.photographers !== newProps.photographers
      && newProps.photographers.length
      && !this.state.photographer
    ) {
      this.setState({
        photographer: newProps.photographers[0].id
      }, () => {
        this.props.onPhotographerSelected(this.state.photographer);
      });
    }
  }

  renderPhotographer(photographer) {
    return null;
  }

  render() {
    if (!this.props.country) {
      return (<NotFound />);
    }

    return (<View style={styles.content}>
      <View>
        <img style={styles.countryImage} src={this.props.country.image} alt={this.props.country.title} />
        {this.props.country.title}
      </View>
      <View>
        {this.props.photographers.map((photographer) => this.renderPhotographer(photographer))}
      </View>
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
  onPhotographerSelected: PropTypes.func.isRequired
};

Country.defaultProps = {
  country: null
};

export default Country;
