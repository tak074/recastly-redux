import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.jf';
import VideoPlayerContainer from '../containers/VideoPlayerContainer';
import SearchContainer from '../containers/SearchContainer';

const App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 col-md-offset-3">
        <SearchContainer/>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayerContainer/>
      </div>
      <div className="col-md-5">
        <VideoListContainer/>
      </div>
    </div>
  </div>
);

export default App;
