import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import 'whatwg-fetch';
import reducer from './reducer';
import Splash from './containers/Splash';
import Destinations from './containers/Destinations';
import About from './containers/About';
import Prices from './containers/Prices';
import Contacts from './containers/Contacts';
import Partners from './containers/Partners';
import Country from './containers/Country';
import NotFound from './components/NotFound';
import TopBar from './components/TopBar';
import View from './components/partials/FlexView';
import Footer from './components/partials/Footer';
import FullscreenGallery from './containers/FullscreenGallery';
import theme from './theme';

const store = createStore(reducer, applyMiddleware(thunk, logger));

const routes = [{
  path: '/',
  exact: true,
  component: Destinations
}, {
  path: '/prices',
  exact: true,
  component: Prices
}, {
  path: '/about',
  exact: true,
  component: About
}, {
  path: '/contacts',
  exact: true,
  component: Contacts
}, {
  path: '/partners',
  exact: true,
  component: Partners
}, {
  path: '/destinations/:country',
  component: Country
}];

const styles = {
  content: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: theme.background
  },
  footerWrapper: {
    height: 20
  }
};

const App = () => <Provider store={store}>
  <Splash>
    <HashRouter>
      <View style={styles.content}>
        <TopBar />

        <Switch>
          {routes.map((route, index) => <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />)}
          <Route key={'not-found'} component={NotFound}/>
        </Switch>

        <View style={styles.footerWrapper}>
          <Footer />
        </View>

        <FullscreenGallery />
      </View>
    </HashRouter>
  </Splash>
</Provider>;

export default App;
