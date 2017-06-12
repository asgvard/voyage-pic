import React from 'react';
import Footer from './partials/Footer';
import './Contacts.css';

const contacts = [
  '+38(066)335 99 53',
  '+38(096)801 81 88',
  '+38(068)511 57 27',
  '+38(099)724 15 78',
  'info@voyage-pic.com'
];

const Contacts = () => <div className="page">
  <div className="contacts">
    <div className="top-spacer" />
    <div className="contacts-headline">
      <div className="container">
        <div className="contacts-headline-photo">
          <img src={require('../../resources/images/contacts-headline.jpg')} alt="Contacts"/>
        </div>
      </div>
    </div>
    <div className="contacts-main">
      <div className="contacts-description">
        <h2>{'Контакты'}</h2>
        <div>
          {'Сохранить тёплые воспоминания, увидеть мир идеальным – все это возможно, если Вы обратитесь к нам. Мы поможем сделать Ваше путешествие ярким и получить фотографии, о которых Вы всегда мечтали. Ведь с Вами будет работать команда профессионалов, которая любит свою работу и имеет индивидуальный подход к каждому клиенту. Мы можем предложить разноплановые съемки, такие как: репортажная, индивидуальная, прогулочная, семейная, lovestory, свадебная или любая другая съемка по Вашему желанию.'}
        </div>
      </div>
      <div className="contacts-table">
        <table>
          <tbody>
            {contacts.map((contact, index) => <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
              <td>{contact}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
  </div>
</div>;

export default Contacts;
