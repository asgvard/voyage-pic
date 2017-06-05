import React from 'react';
import FontAwesome from 'react-fontawesome';
import View from './FlexView';
import theme from '../../theme';

const styles = {
  content: {
    width: '100%',
    height: '100%',
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: theme.textSecondary,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  socialIconLink: {
    color: theme.textSecondary,
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15
  }
};

const Footer = () => <View horizontal style={styles.content}>
  <a href={'https://www.instagram.com/voyage.pic'} target={'_blank'} style={styles.socialIconLink}>
    <FontAwesome name={'instagram'} />
  </a>
  <a href={'https://www.facebook.com/voyagepic'} target={'_blank'} style={styles.socialIconLink}>
    <FontAwesome name={'facebook-square'} />
  </a>
  <a href={'mailto:info@voyage-pic.com'} style={styles.socialIconLink}>
    <FontAwesome name={'envelope-o'} />
  </a>
</View>;

export default Footer;
