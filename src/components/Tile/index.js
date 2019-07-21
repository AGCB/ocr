import React from 'react';

const Tile = ({tile}) => {
  return (
    <div className="tile">
      <span>{`${tile.x}/${tile.y}`}</span>
    </div>

  )
}

export default Tile;
