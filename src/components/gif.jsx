import React, { Component } from 'react';

class Gif extends Component {
  handlOnClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    // use this to handle empty values
    const { id } = this.props;
    if (!id) {
      return null;
    }

    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.webp?cid=790b761178c835cbf9d629d2b5c082189fc1bae2c3bb337f&rid=giphy.webp`;
    return (
      <img src = { src } alt = "" className = "gif"
      onClick = { this.handlOnClick } />
    ); 
  }
}

export default Gif;