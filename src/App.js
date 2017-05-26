import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import reducer from './reducer';
import Splash from './containers/Splash';
import Home from './containers/Home';
import Destinations from './containers/Destinations';
import Contacts from './containers/Contacts';
import Partners from './containers/Partners';
import Country from './containers/Country';
import NotFound from './components/NotFound';
import TopBar from './components/TopBar';
import View from './components/partials/FlexView';
import FullscreenGallery from './containers/FullscreenGallery';

const store = createStore(reducer, applyMiddleware(thunk, logger));

const routes = [{
  path: '/',
  exact: true,
  component: Home
}, {
  path: '/destinations',
  exact: true,
  component: Destinations
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
    height: '100%'
  }
};

const App = () => <Provider store={store}>
  <Splash>
    <BrowserRouter>
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

        <FullscreenGallery />
      </View>
    </BrowserRouter>
  </Splash>
</Provider>;

export default App;
