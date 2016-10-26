import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyBQcGUenMqfnqKMpT9F19yY6cWEuo2jDs0';



class App extends Component {
  constructor(props){
    super(props);

    this.state={ videos: [] };

    YTSearch({key: API_KEY, term: 'Knicks'}, (videos) => {
      this.setState=({ videos });
    });
  }
  render(){
    return (
      <div>
      <SearchBar />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('.container'))
