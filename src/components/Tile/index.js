import React, { Component } from 'react';

class Tile extends Component {

  handleHover(x,y) {
    this.props.handleHover(x,y);
  }

  render() {
    const { tile } = this.props;
    return (
      <div
        className={`tile ${tile.p? 'active':'non-active'}`}>
          <span
            onMouseEnter={() => this.handleHover(tile.x,tile.y)}>
            _
            </span>
      </div>

    )
  }

}

export default Tile;
