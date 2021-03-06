import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// import logger from 'redux-logger';
import {Provider} from 'react-redux';
import 'whatwg-fetch';
import reducer from './reducer';
import Splash from './containers/Splash';
import Destinations from './containers/Destinations';
import Feedback from './containers/Feedback';
import Prices from './containers/Prices';
import Contacts from './containers/Contacts';
import Partners from './containers/Partners';
import Country from './containers/Country';
import NotFound from './components/NotFound';
import TopBar from './components/TopBar';
import FullscreenGallery from './containers/FullscreenGallery';

const store = createStore(reducer, applyMiddleware(thunk));

const routes = [{
  path: '/',
  exact: true,
  component: Destinations
}, {
  path: '/prices',
  exact: true,
  component: Prices
}, {
  path: '/contacts',
  exact: true,
  component: Contacts
}, {
  path: '/feedback',
  exact: true,
  component: Feedback
}, {
  path: '/partners',
  exact: true,
  component: Partners
}, {
  path: '/destinations/:country',
  component: Country
}];

const App = () => <Provider store={store}>
  <Splash>
    <HashRouter>
      <div id="App">
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
      </div>
    </HashRouter>
  </Splash>
</Provider>;

export default App;
