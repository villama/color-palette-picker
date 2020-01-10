import React, { Component } from 'react'
import './SingleColorPalette.css'
import './ColorBox'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import { Link } from 'react-router-dom'

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props)
    this._shades = this.gatherShades(this.props.palette, this.props.colorId)
    this.state = {
      format: 'hex'
    }
  }

  gatherShades = (palette, colorFilterName) => {
    let shades = []
    let allColors = palette.colors
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorFilterName)
      )
    }
    return shades.slice(1)
  }

  changeFormat = format => {
    this.setState({ format })
  }

  render() {
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[this.state.format]}
      />
    ))
    return (
      <div className='SingleColorPalette Palette'>
        <Navbar handleChangeFormat={this.changeFormat} />
        <div className='Palette-colors'>
          {colorBoxes}
          <div className='go-back ColorBox'>
            <Link
              to={`/palette/${this.props.palette.id}`}
              className='back-button'
            >
              GO BACK
            </Link>
          </div>
        </div>
        <PaletteFooter
          paletteName={this.props.palette.paletteName}
          emoji={this.props.palette.emoji}
        />
      </div>
    )
  }
}
