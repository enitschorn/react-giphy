import React, { Component } from 'react';

class SearchBar extends Component {
  handleKeyUp = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <input type="text" className = 'form-control form-search'
      onKeyUp = { this.handleKeyUp }/>
    );
  }
}

export default SearchBar;