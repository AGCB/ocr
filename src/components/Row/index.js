import React from 'react';
import Tile from '../Tile';

const Row = ({tiles, handleHover}) => {
  return (
    <div className="row">
      {
        tiles.map((tile, ind) => {
          return (
            <Tile
              tile={tile}
              key={ind}
              handleHover={handleHover}/>
          )
        })
      }
    </div>
  )
}

export default Row;
