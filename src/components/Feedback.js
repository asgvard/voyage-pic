import React, {Component} from 'react';
import Footer from './partials/Footer';
import './Feedback.css';
import {feedbacks} from '../static/data';

class Feedback extends Component {
  renderFeedback(feedback) {
    return (<div key={feedback.id} className="feedback-block">
      <div className="feedback-description-wrapper">
        <div className="feedback-description">
          <div className="feedback-description-border">
            <div className="feedback-description-text">{feedback.text}</div>
            <div className="feedback-description-author">{feedback.name}</div>
          </div>
        </div>
      </div>
      <div className="feedback-photo-wrapper">
        <div className="feedback-photo">
          <img src={feedback.image} alt={feedback.name}/>
        </div>
      </div>
    </div>);
  }

  render() {
    return (<div className="page">
      <div className="feedback">
        <div className="top-spacer" />
        <div className="feedback-headline">
          <div className="container">
            <div className="feedback-headline-photo">
              <img src={require('../../resources/images/feedback-headline.jpg')} alt="Feedback"/>
            </div>
          </div>
        </div>
        <div className="feedback-content">
          <div key={'description'} className="feedback-block">
            <div className="feedback-description-wrapper">
              <div className="feedback-description-title">
                <h2>{'Отзывы'}</h2>
                <div>
                  {'Присылайте Ваши отзывы на электронную почту или оставляйте на страничках в соц. сетях. Нам очень важно знать Ваше мнение. Мы становимся лучше благодаря Вам.'}
                </div>
              </div>
            </div>
            <div className="feedback-photo-wrapper" />
          </div>
          {feedbacks.map((feedback, index) =>
            this.renderFeedback(feedback))}
        </div>
        <Footer />
      </div>
    </div>);
  }
}

export default Feedback;
