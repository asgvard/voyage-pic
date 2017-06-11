import React from 'react';
import Footer from './partials/Footer';
import './Partners.css';

const Partners = () => <div className="page">
  <div className="partners">
    <div className="top-spacer" />
    <div className="partners-list">
      <div className="partner-block">
        <a href={'http://www.mandry.kharkov.ua'} target={'_blank'}>
          <img src={'http://www.voyage-pic.com/public/images/partners/Mandry-01.png'} alt={'Mandry'} />
        </a>
      </div>
      <div className="partner-block">
        <a href={'http://pinkelephant.travel/'} target={'_blank'}>
          <img src={'http://www.voyage-pic.com/public/images/partners/Slon-01.png'} alt={'Slon'} />
        </a>
      </div>
    </div>
    <Footer />
  </div>
</div>;

export default Partners;
