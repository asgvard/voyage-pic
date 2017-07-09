import React, {Component} from 'react';
import Footer from './partials/Footer';
import './Feedback.css';
import {feedbacks} from '../static/data';

class Feedback extends Component {
  renderFeedback(feedback) {
    return (<div key={feedback.id} className="feedback-block">

    </div>);
  }

  render() {
    return (<div className="page">
      <div className="feedback">
        <div className="top-spacer" />
        {feedbacks.map((feedback, index) =>
          this.renderFeedback(feedback))}
        <Footer />
      </div>
    </div>);
  }
}

export default Feedback;
