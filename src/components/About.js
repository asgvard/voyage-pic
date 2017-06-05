import React from 'react';
import View from './partials/FlexView';
import theme from '../theme';

const styles = {
  content: {
    flex: 1,
    overflow: 'auto'
  },
  logoWrapper: {
    height: 50,
    padding: 30
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  },
  descriptionWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  description: {
    width: '60%',
    textAlign: 'justify',
    color: theme.textPrimary,
    fontSize: 18,
    whiteSpace: 'pre-wrap'
  }
};

const About = () => <View style={styles.content}>
  <View style={styles.logoWrapper}>
    <img style={styles.logo} src={require('../../resources/images/logo-gradient.png')} alt={'Voyage Pic'} />
  </View>
  <View style={styles.descriptionWrapper}>
    <View style={styles.description}>
      {'Есть три вещи, на которые можно бесконечно долго смотреть: это огонь, вода и фотографии, которые создаёт наша профессиональная команда VoyagePic, работающая в разных уголках планеты. Любовь к созданию идеальных фотографий и улыбки наших счастливых клиентов - это те вещи, которые вдохновляют нас трудиться ещё больше и придумывать новые идеи для Вас.\n\nСохранить тёплые воспоминания, увидеть мир идеальным – все это возможно, если Вы обратитесь к нам. Мы поможем сделать Ваше путешествие ярким и получить фотографии, о которых Вы всегда мечтали. Ведь с Вами будет работать команда профессионалов, которая любит свою работу и имеет индивидуальный подход к каждому клиенту. Мы можем предложить разноплановые съемки, такие как: репортажная, индивидуальная, прогулочная, семейная, lovestory, свадебная или любая другая съемка по Вашему желанию.\n\nVoyagePic – делает Ваш мир ярким, как в душе, так и на картинках.\n\nСохрани эти незабываемые эмоции вместе с нами!'}
    </View>
  </View>
</View>;

export default About;
