import React, { Component } from 'react';
import Row from '../Row/';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    }
  }

  componentDidMount() {
    let newRows = [];
    for(let i = 0; i<28; i++) {
      let newRow = [];
      for(let j = 0; j<28; j++) {
        newRow.push({x: i, y: j, p: false})
      }
      newRows.push(newRow);
    }
    this.setState({rows: newRows})
  }









  handleHover = (x,y) => {
    const { rows } = this.state;
    console.log('!!!BEFOREHOVERSTATE', rows);

    let r = this.state.rows[x][y];
    r.p = true;
  this.setState({ [r]: r });

  }














  render() {
    const { rows } = this.state;
    const { handleHover } = this;
    return (
      rows.map((row, ind) => {
        return (
          <Row
            tiles={rows[ind]}
            key={ind}
            handleHover={handleHover}/>
        )
      })
    )
  }

}
export default Grid;
