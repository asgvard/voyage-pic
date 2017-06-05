import React from 'react';
import View from './partials/FlexView';
import theme from '../theme';

const styles = {
  content: {
    flex: 1,
    overflow: 'auto',
    justifyContent: 'center'
  },
  contactsWrapper: {
    padding: 20
  },
  contacts: {
    width: '60%',
    margin: 'auto'
  },
  countryLink: {
    textDecoration: 'none'
  },
  contactRow: {
    height: 40,
    backgroundColor: theme.backgroundDarker
  },
  contactRowOdd: {
    backgroundColor: theme.backgroundColor
  },
  contactRowTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    color: theme.textPrimary,
    fontSize: 20
  },
  contactRowValue: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    color: theme.textPrimary,
    fontSize: 20
  },
  link: {
    textDecoration: 'none'
  }
};

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
  value: <a href={'https://www.instagram.com/voyage.pic'} target={'_blank'} style={styles.link}>{'voyage.pic'}</a>
}, {
  title: 'Facebook',
  value: <a href={'https://www.facebook.com/voyagepic'} target={'_blank'} style={styles.link}>{'voyagepic'}</a>
}];

const Contacts = () => <View style={styles.content}>
  <div style={styles.contactsWrapper}>
    <View style={styles.contacts}>
      {contacts.map((contact, index) => <View
        horizontal
        style={index % 2 === 0 ? styles.contactRow : {
          ...styles.contactRow,
          ...styles.contactRowOdd
        }}
      >
        <View style={styles.contactRowTitle}>{contact.title}</View>
        <View style={styles.contactRowValue}>{contact.value}</View>
      </View>)}
    </View>
  </div>
</View>;

export default Contacts;
