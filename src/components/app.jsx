import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: '4Zo41lhzKt6iZ8xff9'
    }
  }

  render() {
    const gifs = [
      { id: '4Zo41lhzKt6iZ8xff9' },
      { id: '51Uiuy5QBZNkoF3b2Z' }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id = { this.state.selectedGifId }/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs = { this.state.gifs } />
        </div>
      </div>
    );
  }
}

export default App;