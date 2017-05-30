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
    const mouseOverStyle = {
      ...this.props.style,
      ...this.props.mouseOverStyle
    };

    return (<div
      style={this.state.mouseOver ? mouseOverStyle : this.props.style}
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
  mouseOverStyle: PropTypes.object
};

Button.defaultProps = {
  style: {},
  mouseOverStyle: {}
};

export default Button;
