import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id = '4Zo41lhzKt6iZ8xff9'/>
          </div>
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}

export default App;