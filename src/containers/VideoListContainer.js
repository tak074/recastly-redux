import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var stateToProps = (state) => ({
  videos: state.videoList
});

var dispatchToProps = (dispatch) => ({
  handleVideoListEntryTitleClick: (video) => {
    dispatch(changeVideo(video));
  }
});



var VideoListContainer = connect(stateToProps, dispatchToProps)(VideoList);


export default VideoListContainer;
