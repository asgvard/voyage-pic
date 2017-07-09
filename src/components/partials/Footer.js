import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {feedbacks} from '../../static/data';
import './Footer.css';
import {Link} from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedbackIndex: 0
    };

    this.feedbackInterval = null;
  }

  componentDidMount() {
    this.feedbackInterval = setInterval(() => {
      const nextIndex = this.state.feedbackIndex === feedbacks.length - 1 ? 0 : this.state.feedbackIndex + 1;

      this.setState({
        feedbackIndex: nextIndex
      });
    }, 15000);
  }

  componentWillUnmount() {
    if (this.feedbackInterval) {
      clearInterval(this.feedbackInterval);
    }
  }

  renderFeedback() {
    const feedback = feedbacks[this.state.feedbackIndex];

    return (<Link to="/feedback" className="feedback">
      <div className="photo">
        <img src={feedback.image} alt={feedback.name}/>
      </div>
      <div className="feedback-text-wrapper">
        <div className="feedback-text-border">
          <div className="feedback-text">
            {feedback.text}
          </div>
        </div>
      </div>
    </Link>);
  }

  render() {
    return (<div className="footer-wrapper">
      <div className="footer-feedback">
        <div className="container">
          {this.renderFeedback()}
          <div className="about">
            <div className="about-text">
              {'Любовь к созданию идеальных фотографий и улыбки наших счастливых клиентов - это те вещи, которые вдохновляют нас трудиться ещё больше и придумывать новые идеи для Вас.'}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-social">
        <div className="container">
          <div className="text copyright">
            {'© 2017 VoyagePic'}
          </div>
          <div className="text description">
            {'Сохрани незабываемые эмоции с командой профессионалов.'}
            <br/>
            {'Мы снимаем в разных уголках планеты для Вас!'}
          </div>
          <div className="links">
            <a href={'https://www.facebook.com/voyagepic'} target={'_blank'}>
              <FontAwesome name={'facebook-square'} />
            </a>
            <a href={'https://www.instagram.com/voyage.pic'} target={'_blank'}>
              <FontAwesome name={'instagram'} />
            </a>
            <a href={'https://www.youtube.com/channel/UCuwux3GC-w-vF-AiAkbbk5w'} target={'_blank'}>
              <FontAwesome name={'youtube'} />
            </a>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Footer;
