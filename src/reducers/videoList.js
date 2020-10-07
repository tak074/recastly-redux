import Redux from 'redux';

var videoListReducer = (state = sampleData, action) => {
  switch (action.type) {
  case 'changeVideoList':
    return action.videos || [];
  default:
    return state;
  }
};

export default videoListReducer;
