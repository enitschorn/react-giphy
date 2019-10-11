import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null //'4Zo41lhzKt6iZ8xff9'
    }
  }

  search = (query) => {
    giphy('IswYiKB8xFSF9v91wB0AmwL6Wbkht9f9').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
         gifs: result.data
      })
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction = { this.search } />
          <div className="selected-gif">
            <Gif id = { this.state.selectedGifId } />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs = { this.state.gifs } selectGif = { this.selectGif } />
        </div>
      </div>
    );
  };
}

export default App;
