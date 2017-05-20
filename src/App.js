import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Home from './components/Home';
import Destinations from './components/Destinations';
import Contacts from './components/Contacts';
import Country from './components/Country';
import NotFound from './components/NotFound';
import TopBar from './components/TopBar';
import View from './components/partials/FlexView';

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
  path: '/destinations/:country',
  component: Country
}];

const styles = {
  content: {
    width: '100%',
    height: '100%'
  }
};

const App = () => <BrowserRouter>
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
  </View>
</BrowserRouter>;

export default App;
