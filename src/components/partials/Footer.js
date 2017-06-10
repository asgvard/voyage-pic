import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Footer.css';

const Footer = () => <div className="footer">
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
</div>;

export default Footer;
