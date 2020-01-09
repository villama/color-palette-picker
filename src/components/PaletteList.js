import React, { Component } from 'react'
import './PaletteList.css'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'

export default class PaletteList extends Component {
  render() {
    return (
      <div>
        <h1>Palette List</h1>
        {this.props.palettes.map(p => (
          <p>
            {/* <Link to={`/palette/${p.id}`}> */}
            <MiniPalette {...p} />
            {/* </Link> */}
          </p>
        ))}
      </div>
    )
  }
}
