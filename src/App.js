import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ImageRenderer from './pages/ImageRenderer';
import VideoRenderer from './pages/VideoRenderer';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/image/:id'>
          <ImageRenderer />
        </Route>
        <Route exact path='/video/:id'>
          <VideoRenderer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
