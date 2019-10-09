import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.webp?cid=790b761178c835cbf9d629d2b5c082189fc1bae2c3bb337f&rid=giphy.webp`;
   
    return (
      <img src = { src } alt = "" className = "gif"/>
    ); 
  }
}

export default Gif;