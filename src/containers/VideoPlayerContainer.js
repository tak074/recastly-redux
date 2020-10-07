import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var stateToProps = (state) => ({
  video: state.currentVideo
});

var VideoPlayerContainer = connect(stateToProps, null)(VideoPlayer);



export default VideoPlayerContainer;
