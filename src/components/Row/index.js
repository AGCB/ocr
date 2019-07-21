import React from 'react';
import Tile from '../Tile';

const Row = ({tiles}) => {
  return (
    <div className="row">
      {
        tiles.map((tile, ind) => {
          return (
            <Tile tile={tile} key={ind}/>
          )
        })
      }
    </div>
  )
}

export default Row;
