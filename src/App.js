import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Destinations from './components/Destinations';
import Contacts from './components/Contacts';
import TopBar from './components/TopBar';

const App = () => <BrowserRouter>
  <div>
    <TopBar />

    <hr/>

    <Route exact path="/" component={Home}/>
    <Route path="/destinations" component={Destinations}/>
    <Route path="/contacts" component={Contacts}/>
  </div>
</BrowserRouter>;

export default App;
