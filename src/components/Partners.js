import React from 'react';
import View from './partials/FlexView';

const styles = {
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  partnerLogoWrapper: {
    margin: 30
  },
  logoLink: {
    height: 300,
    width: 300
  },
  logo: {
    height: '100%',
    width: '100%',
    objectFit: 'content'
  }
};

const Partners = () => <View horizontal style={styles.content}>
  <View style={styles.partnerLogoWrapper}>
    <a href={'http://www.mandry.kharkov.ua'} target={'_blank'} style={styles.logoLink}>
      <img src={'http://www.voyage-pic.com/public/images/partners/Mandry-01.png'} alt={'Mandry'} style={styles.logo} />
    </a>
  </View>
  <View style={styles.partnerLogoWrapper}>
    <a href={'http://pinkelephant.travel/'} target={'_blank'} style={styles.logoLink}>
      <img src={'http://www.voyage-pic.com/public/images/partners/Slon-01.png'} alt={'Slon'} style={styles.logo} />
    </a>
  </View>
</View>;

export default Partners;
