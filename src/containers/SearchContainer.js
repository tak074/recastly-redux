import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

var dispatchToProps = (dispatch) => ({
  handleInputChange: (query) => {
    dispatch(handleVideoSearch(query));
  }
});

var SearchContainer = connect(null, dispatchToProps)(Search);


export default SearchContainer;
