import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ImageRenderer from './pages/ImageRenderer';
import VideoRenderer from './pages/VideoRenderer';
import TextRenderer from './pages/TextRenderer';
import AudioRenderer from './pages/AudioRenderer';
import CompressedRenderer from './pages/CompressedRenderer';

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
        <Route exact path='/text/:id'>
          <TextRenderer />
        </Route>
        <Route exact path='/audio/:id'>
          <AudioRenderer />
        </Route>
        <Route exact path='/application/:id'>
          <CompressedRenderer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
