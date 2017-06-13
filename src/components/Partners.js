import React from 'react';
import Footer from './partials/Footer';
import './Partners.css';

const Partners = () => <div className="page">
  <div className="partners">
    <div className="top-spacer" />
    <div className="partners-headline">
      <div className="container">
        <h2>{'Партнеры'}</h2>
        <div className="partners-description">
          {`Друзья, мы рады приветствовать вас на сайте наших партнеров VOYAGE PIC.
            Агентства Путешествий МАНДРИ, Розовый Слон работают с 2007 года и за это время накопили огромный опыт, который неоднократно был подтвержден наградами и дипломами в области туризма.
            Каждый год мы открываем новые направления и предлагаем все более широкий спектр услуг в туризме.
            На данный момент мы предлагаем: туры во все страны мира, покупку авиабилетов, оформление виз и загранпаспортов, страхование отдыха, круизы, подарочные сертификаты на туры и многое другое.`}
        </div>
      </div>
    </div>
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
