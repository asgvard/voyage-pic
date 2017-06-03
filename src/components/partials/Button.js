import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseOver: false
    };
  }

  render() {
    const highlightedStyle = {
      ...this.props.style,
      ...this.props.highlightedStyle
    };

    return (<div
      style={this.state.mouseOver ? highlightedStyle : this.props.style}
      onMouseEnter={() => {
        this.setState({
          mouseOver: true
        });
      }}
      onMouseLeave={() => {
        this.setState({
          mouseOver: false
        });
      }}
      onClick={this.props.onClick}
    >
      {this.props.children}
    </div>);
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  highlightedStyle: PropTypes.object
};

Button.defaultProps = {
  style: {},
  highlightedStyle: {}
};

export default Button;
