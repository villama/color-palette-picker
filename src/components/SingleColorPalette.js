import React, { Component } from 'react'
import './ColorBox'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import styles from '../styles/PaletteStyles'
import { withStyles } from '@material-ui/styles'

class SingleColorPalette extends Component {
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

  navigateBack = () => {
    this.props.history.push(`/palette/${this.props.palette.id}`)
  }

  render() {
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[this.state.format]}
      />
    ))
    const { classes } = this.props
    return (
      <div className={classes.Palette}>
        <Navbar handleChangeFormat={this.changeFormat} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack} onClick={this.navigateBack}>
            {/* <Link to={`/palette/${this.props.palette.id}`}>GO BACK</Link> */}
            <button>GO BACK</button>
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

export default withStyles(styles)(SingleColorPalette)
