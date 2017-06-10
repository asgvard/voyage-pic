import React from 'react';

const contacts = [{
  title: 'Телефоны',
  value: '+38(066)335 99 53'
}, {
  title: '',
  value: '+38(096)801 81 88'
}, {
  title: '',
  value: '+38(068)511 57 27'
}, {
  title: '',
  value: '+38(099)724 15 78'
}, {
  title: 'E-mail',
  value: 'info@voyage-pic.com'
}, {
  title: 'Instagram',
  value: <a href={'https://www.instagram.com/voyage.pic'} target={'_blank'}>{'voyage.pic'}</a>
}, {
  title: 'Facebook',
  value: <a href={'https://www.facebook.com/voyagepic'} target={'_blank'}>{'voyagepic'}</a>
}];

const Contacts = () => <div>
  <div>
    <div>
      {contacts.map((contact, index) => <div>
        <div>{contact.title}</div>
        <div>{contact.value}</div>
      </div>)}
    </div>
  </div>
</div>;

export default Contacts;
